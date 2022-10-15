import ItemDetail from './ItemDetail'
import { getSingleProduct } from '../services/firestore'
import { useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner'


const ItemDetailContainer = () => {
    const { id } = useParams(); 
    const [idProd, setIdProd]= useState({})
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
      setLoading(true);
      getSingleProduct(id).then((respuesta)=> setIdProd(respuesta))
      .finally(()=> setLoading(false))
    }, [id]);

    return (
      <div className="flex justify-center">
        {loading ? <Spinner Spinner={Spinner} /> : <ItemDetail idProd={idProd}/>}
  </div>
  )
}

export default ItemDetailContainer