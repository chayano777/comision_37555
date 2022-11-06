import { useState, useEffect } from "react";
import { getProducts, getCategoryProducts } from "../services/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";


const ItemListContainer = (props) => {

  const { categoryN } = useParams(); 
  const[products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);
  
  
  useEffect(()=>{
    setLoading(true);
    if(categoryN === undefined){
    getProducts()
    .then((response)=> 
        setProducts(response))
    .finally(()=> setLoading(false));  
  }
    else {
      getCategoryProducts(categoryN)
    .then(
      (response)=>
        setProducts(response))
    .finally(()=>setLoading(false))
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
