import ItemCount from "./ItemCount";
import { useState, useContext } from "react"
import { Link } from "react-router-dom"
import { cartContext }  from "../context/cartContext";
import swal from 'sweetalert2';

const ItemDetail = ({ idProd }) => {

  const {addItem} = useContext(cartContext);
  const [handleEstado, setHandleEstado] = useState(false)
  
  const handleAddToCart = (count ) => {
    addItem(idProd, count);
    swal.fire({
      width:300,
      html: "<b>Se agrego al carrito</b>",
      color:"white",
      showConfirmButton: false,
      timer: 1000,
      position: "bottom-right",
      background: "#2ECC71"
    });
    setHandleEstado(true)
  }

  return (
    <div className="my-10 mx-3 w-1/2 h-1/2 border rounded shadow-md bg-orange-100 overflow-hidden transition-property: all duration-100 ease-in min-h-280">
      <div className="flex justify-evenly border-2 border-orange-700 border-solid rounded-xl">
        <div className="mx-5 my-5 w-72 h-64 object-cover">
          <img
            className="border-2 border-gray-200 border-solid rounded-xl w-full h-full"
            src={idProd.imagen}
            alt=""
          ></img>
        </div>
        <div className="py-3 px-2">
          <h3 className="py-2 text-orange-700 text-lg font-bold text-center">
            {idProd.title}
          </h3>
          <p className="py-2">{idProd.detail}</p>
          <h4 className="py-2 text-center font-bold">$ {idProd.price}</h4>
          <div className="flex justify-center items-center py-10">
            {handleEstado===false?<ItemCount initial={1} stock={idProd.stock} onAddToCart={handleAddToCart}/>:<> <Link to="/cart" className="bg-orange-500 hover:bg-orange-200 hover:text-orange-500 text-white font-bold rounded py-2 px-4 my-5">Ir al carro</Link><Link to="/" className="ml-5 bg-orange-500 hover:bg-orange-200 hover:text-orange-500 text-white font-bold rounded py-2 px-4 my-5" >Continuar comprando</Link></> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
