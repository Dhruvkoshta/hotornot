import "../leaderboard.css";
import { db } from "../firebase";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
import { useEffect, useState } from "react";

const Leaderboard = () => {
	const [tempArr, setTempArray] = useState([]);
	async function getData() {
		try {
			const q = query(collection(db, "users"), orderBy("rating", "desc"));
			let i = 1;
			const querySnapshot = await getDocs(q);
			let array = [];
			querySnapshot.forEach((doc) => {
				let data = doc.data();

				array.push({ ...data, rank: i });

				i++;
			});
			setTempArray(array);
		} catch (err) {
			console.log(err);
		}
	}
	useEffect(() => {
		getData();
	}, []);
	return (
		<div id='wrapper'>
			<div id='board-wrapper'>
				<p id='leaderboard-title'>Hall of Fame</p>
				<div id='board'>
					{tempArr.map(({ id, rating, img, rank }) => {
						return (
							<div
								key={id}
								id='board-entry'
								style={{ paddingTop: "10px", paddingBottom: "10px" }}
							>
								<p className='username' style={{ fontSize: "1.5rem" }}>
									{rank}
								</p>
								<img
									src={img}
									alt={id}
									width='125px'
									height='125px'
									style={{ paddingLeft: "10px" }}
								/>
								<p className='score' style={{ fontSize: "1.5rem" }}>
									{Math.floor(rating)}
								</p>
							</div>
						);
					})}
				</div>

				<a href='/'>
					<button id='return-btn'>Return</button>
				</a>
			</div>
		</div>
	);
};

export default Leaderboard;
