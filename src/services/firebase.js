// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Esl7X8ATHj2-QIwoiPlbxLuRLoY_4Z8",
  authDomain: "react37555-52990.firebaseapp.com",
  projectId: "react37555-52990",
  storageBucket: "react37555-52990.appspot.com",
  messagingSenderId: "726128629846",
  appId: "1:726128629846:web:51b0115039f27592ac83f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);