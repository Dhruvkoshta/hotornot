import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
// import useKeyUp from "../hooks/useKeyUp";
// import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase";
import {
	// addDoc,
	collection,
	getDocs,
	updateDoc,
	doc,
} from "firebase/firestore";
import Elo from "@studimax/elo";
// import { ref, set } from "firebase/database";

const Match = () => {
	const [loading, setLoading] = useState(true);
	const data = [];

	// 	setLoading(false);

	const [animalOne, setAnimalOne] = useState({});
	const [animalTwo, setAnimalTwo] = useState({});

	const getAnimals = async () => {
		if (data.length === 0) {
			const querySnapshot = await getDocs(collection(db, "users"));
			querySnapshot.forEach((doc) => {
				//   doc.data() is never undefined for query doc snapshots
				data.push({
					...doc.data(),
					docId: doc.id,
				});
			});
		}

		const shuffled = data.sort(() => 0.5 - Math.random());
		let selected = shuffled.slice(0, 2);
		setAnimalOne(selected[0]);
		setAnimalTwo(selected[1]);
	};
	useEffect(() => {
		getAnimals();

		setLoading(false);
	}, []);

	const centeredSpinner = (
		<div className='flex items-center justify-center h-screen'>
			<Spinner />
		</div>
	);

	const selectBestAnimal = async (w, l) => {
		setLoading(true);
		const elo = new Elo();
		const winner = w;
		const loser = l;
		const { Ra, Rb } = elo.calculateRating(winner.rating, loser.rating, 1);

		await updateDoc(doc(db, "users", winner.docId), {
			rating: Ra,
		});
		await updateDoc(doc(db, "users", loser.docId), {
			rating: Rb,
		});

		getAnimals();
		setLoading(false);
	};

	return (
		<>
			<div className='flex items-center justify-center'>
				<h1 className='font-bold text-xl'>Choose from either left or right</h1>
			</div>
			{loading && centeredSpinner}
			{!loading && (
				<div className='flex justify-center flex-wrap items-center'>
					<div className='w-full md:w-1/2 p-4 flex flex-col items-center'>
						<img
							src={animalOne.img}
							alt='p1'
							className='max-w-xs max-h-full hover:cursor-pointer'
							onClick={(e) => selectBestAnimal(animalOne, animalTwo)}
						/>
						<div className='text-xl font-bold mt-2'>1</div>
					</div>
					<div className='w-full md:w-1/2 p-4 flex flex-col items-center'>
						<img
							src={animalTwo.img}
							alt='p2'
							className='max-w-xs max-h-full hover:cursor-pointer'
							onClick={(e) => selectBestAnimal(animalTwo, animalOne)}
						/>
						<div className='text-xl font-bold mt-2'>2</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Match;
