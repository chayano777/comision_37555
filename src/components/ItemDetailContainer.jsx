import ItemDetail from './ItemDetail'
import { getSingleProduct } from '../services/dataREST'
import { useState, useEffect} from 'react'
import { CircleLoader } from "react-spinners";
import { useParams } from 'react-router-dom';


const spinner = () => {
  return (
    <div className="mt-40 text-center">
      <CircleLoader color="#D0021B" size={40} />
    </div>
  );
};

const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [idProd, setIdProd]= useState({})
    useEffect(()=>{
      getSingleProduct(id).then((respuesta)=> setIdProd(respuesta))
    }, [id]);

    {/*useEffect(()=>{
      getSingleProduct()
      .then((response)=>{
        console.log("Un ITEM")
        setIdProd(response)
      })
      .catch((error)=>{
        alert(error)
      });
    },[]) */}

    return (
      <div className="flex justify-center">
        {idProd ? <ItemDetail idProd={idProd}/> : spinner()} 
  </div>
  )
}

export default ItemDetailContainer