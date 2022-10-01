import { useState, useEffect } from "react";
import getProducts from "../services/dataREST";
import { getCategoryProducts } from "../services/dataREST";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";


const ItemListContainer = (props) => {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  const { categoryN } = useParams(); 
  const[products, setProducts] = useState([])
  
  
  useEffect(()=>{
    if(categoryN === undefined){
    getProducts()
    .then(
      (response)=>{ 
        console.log("Promise en estado puro")
        setProducts(response)
      }
    )
    .catch((error)=>{
      alert(error)
    })}
    else {
      getCategoryProducts(categoryN)
    .then(
      (response)=>{ 
        console.log("Promise en estado puro")
        setProducts(response)
      }
    )
    .catch((error)=>{
      alert(error)
    })
    }
  },[categoryN])

  return (
    <>
      <h1 className="container text-center py-5 text-orange-600 text-3xl">
        <strong>{props.greeting}</strong>
      </h1>
      <div className="flex justify-center">
        {loading ? <Spinner loading={loading} /> : <ItemList products={products}/>}
      </div>
    </>
  );
};

export default ItemListContainer;
