import ItemDetail from './ItemDetail'
import { getSingleProduct } from '../services/dataREST'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [idProd, setIdProd]= useState({})
    useEffect(()=>{
      getSingleProduct(id).then((respuesta)=> setIdProd(respuesta))
    }, [id]);

    return (
      <div className="flex justify-center">
        <ItemDetail idProd={idProd}/> 
  </div>
  )
}

export default ItemDetailContainer