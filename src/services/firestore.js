// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, doc, getDoc, query, where} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsFc_tnoO-jcdGJS9aPGK5kXsI2vIO6dU",
  authDomain: "react-37555-new.firebaseapp.com",
  projectId: "react-37555-new",
  storageBucket: "react-37555-new.appspot.com",
  messagingSenderId: "492099295002",
  appId: "1:492099295002:web:83baf511baf22acab37ea3"
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