// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, doc, getDoc, query, where} from "firebase/firestore";

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
const db = getFirestore(app);

export async function getProducts(){
  const collectionRef = collection(db, "products");
  let response = await getDocs(collectionRef);

  let dataDocs = response.docs.map(  (docu)=>{let documentFormat = {...docu.data(), id: docu.id};
  return documentFormat;
});
  return dataDocs;
}

export async function getSingleProduct(idParams){
    const docRef = doc(db, "products", idParams);
    const docSnap = await getDoc(docRef);
  return {...docSnap.data(), id: docSnap.id};
}

export async function getCategoryProducts(catParams){
  const collectionRef = collection(db, "products");
  const queryCategory = query(collectionRef, where("category", "==", catParams));

  const response = await getDocs(queryCategory);

  let dataDocs = response.docs.map((docu)=>{
    let documentFormat = {...docu.data(), id: docu.id};
    return documentFormat;
  })

  return dataDocs;
}

export default db;