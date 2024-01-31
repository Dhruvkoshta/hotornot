import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
	addDoc,
	collection,
	updateDoc,
	getDocs,
	doc,
} from "firebase/firestore";

import { db } from "./firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const updateData = () => {
// 	const querySnapshot = await getDocs(collection(db, "users"));
// 	querySnapshot.forEach(async (element) => {
// 		const obj = {
// 			img: `https://raw.githubusercontent.com/mrrobot3141/greenbuilding/main/tierlist/img%20(${
// 				element.data().id
// 			}).jpg`,
// 		};
// 		await updateDoc(doc(db, "users", element.id), obj);
// 		console.log("1");
// 	});
// 	console.log("allDone");
// }

// const addData = async () => {
// 	for (let i = 1; i < 71; i++) {
// 		if (i===28) {
// 			continue
// 		}else{

// 			const obj = {
// 				id: i,
// 				img: `https://raw.githubusercontent.com/mrrobot3141/greenbuilding/main/tierlist/img%20(${i}).jpg`,
// 				rating: 1220,
// 			};
// 			await addDoc(collection(db, "users"), obj);
// 			console.log(i, " done");
// 		}
// 	}
// 	console.log("all done");
// };
// addData();
root.render(
	// <React.StrictMode>
	<App />
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
