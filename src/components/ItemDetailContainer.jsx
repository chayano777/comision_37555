import ItemDetail from './ItemDetail'
import getProducts from '../services/dataREST'
import { useState, useEffect } from 'react'



const ItemDetailContainer = () => {
    
    const [idProd, setIdProd]= useState({})
    useEffect(()=>{
      getProducts()
      .then((response)=>{
        console.log("Un ITEM")
        setIdProd(response.id[1])
      })
      .catch((error)=>{
        alert(error)
      });
    },[])

    return (
      <div className="flex justify-center">
        <ItemDetail idProd={idProd} /> 
  </div>
  )
}

export default ItemDetailContainer