// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	// apiKey: "AIzaSyCG1eRwofDDkxTs9roq-RZwgglVq4VRB0k",
	// authDomain: "hotornot-ba1ec.firebaseapp.com",
	// projectId: "hotornot-ba1ec",
	// storageBucket: "hotornot-ba1ec.appspot.com",
	// messagingSenderId: "914543082310",
	// appId: "1:914543082310:web:7e4ffb5d3213ec85218347",

	// apiKey: "AIzaSyDdA1KPG8AOtjphlY0VuUYX-8PVYipEjSU",
	// authDomain: "facemash-6142a.firebaseapp.com",
	// projectId: "facemash-6142a",
	// storageBucket: "facemash-6142a.appspot.com",
	// messagingSenderId: "293849736131",
	// appId: "1:293849736131:web:d531d6f3b8d71182645376",
	// measurementId: "G-2QFB7H9N1Z",

	apiKey: "AIzaSyB28iQenLU1I13jmKtUNEpEC2ColFqJbgA",
	authDomain: "ratemaster69.firebaseapp.com",
	projectId: "ratemaster69",
	storageBucket: "ratemaster69.appspot.com",
	messagingSenderId: "285097677347",
	appId: "1:285097677347:web:d9e8a9975c6f1b93bbd796",
	measurementId: "G-FD8S1WM18R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
