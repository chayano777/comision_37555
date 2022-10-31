// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDocs, getFirestore, collection, doc, getDoc, query, where, addDoc} from "firebase/firestore";


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

export async function createBuyOrder(orderData){
  const collectionRef = collection(db, "orders")
  let response = await addDoc(collectionRef, orderData)
  return (response.id)
}

// Exportar Array de objetos a firebase
/*export async function exportDataToFirebase() {
  const data = [
    {
      id: 1,
      title: "Ropa Bebe (M)",
      price: 800,
      stock: 10,
      category: "clothing",
      detail: "Rellenar a futuro",
      imagen: "/img/ropa1.png"
    },
    {
      id: 2,
      title: "Ropa Bebe (F)",
      price: 800,
      stock: 5,
      category: "clothing",
      detail: "Enterito para beba, talle 9 meses",
      imagen: "/img/ropa2.png"
    },
    {
      id: 3,
      title: "Body p/ recien nacido (F)",
      price: 600,
      stock: 3,
      category: "clothing",
      detail: "Rellenar a futuro",
      imagen: "/img/ropa3.png"
    },
    {
      id: 4,
      title: "Kit Ropa Bebe (F-M)",
      price: 2700,
      stock: 2,
      category: "clothing",
      detail: "Rellenar a futuro",
      imagen: "/img/ropa4.jpg"
    },
    {
      id: 5,
      title: "Combo Mamadera y Chupete: Winnie-Poo",
      price: 1500,
      stock: 5,
      category: "accesories",
      detail: "Rellenar a futuro",
      imagen: "/img/acc1.png"
    },
    {
      id: 6,
      title: "Canasto para Bebes con Juguetes",
      price: 3200,
      stock: 5,
      category: "accesories",
      detail: "Rellenar a futuro",
      imagen: "/img/acc2.png"
    },
    {
      id: 7,
      title: "Babero para bebe",
      price: 500,
      stock: 5,
      category: "accesories",
      detail: "Rellenar a futuro",
      imagen: "/img/acc3.jpg"
    },
    {
      id: 8,
      title: "Nidito",
      price: 4000,
      stock: 5,
      category: "accesories",
      detail: "Rellenar a futuro",
      imagen: "/img/acc4.png"
    },
  ];

  const dataSinId = data.map((e)=>{
    return {title}
  });
// collection() => recibe 2 parametro: conexion con firestore y le agregamos el nombre de la coleccion " ... ". 
  const collectionRef = collection(db, "productos");

  for(let item of data){
    const newDoc = await addDoc(collectionRef, item);
  }

}
*/
export default db;