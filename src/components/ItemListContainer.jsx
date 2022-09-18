import { useState, useEffect } from "react";
import getProducts from "../services/dataREST";
import { CircleLoader } from "react-spinners";
import ItemList from "./ItemList";

const spinner = () => {
  return (
    <div className="mt-40 text-center">
      <CircleLoader color="#D0021B" size={40} />
    </div>
  );
};


const ItemListContainer = (props) => {

  const[products, setProducts] = useState([])

  useEffect(()=>{
    getProducts().then(
      (response)=>{ 
        console.log("Promise en estado puro")
        setProducts(response)
      }
    );
  },[])

  /*<div className="w-60 h-25 border rounded  p-5 m-5 bg-orange-200">
          <ItemCount stock="5" initial={1} />
        </div>
  */
  return (
    <>
      <h1 className="container text-center py-5 text-orange-600 text-3xl">
        <strong>{props.greeting}</strong>
      </h1>
      <div className="flex justify-center">
        {!products ? spinner(): <ItemList products={products} />}
      </div>
    </>
  );
};

export default ItemListContainer;
