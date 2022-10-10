import { Link } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { useContext, useState, useEffect } from 'react'
import { FaTrash } from "react-icons/fa";


const Cart = () => {
   const { cart, clearCart, removeItem} = useContext(cartContext);

   const [total, setTotal] = useState(0);

   useEffect (() => {
    let a = 0;
    cart.forEach((item) => {
      a +=item.price * item.count
    });
    setTotal(a);
  },[cart]);

  const clickRemove = (id) => {
    removeItem(id);
  };

  const clickClear = () => {
    clearCart();
  };

  console.log(cart.length)

  return (
    <>
      <div className="text-orange-700 font-bold text-3xl mt-10 mb-10 text-center">CARRITO</div>
      <div className="p-4 border rounded-lg border-slate-900 shadow-lg mx-auto">
      {cart.length === 0 ? (
              <>
                <div className="text-2xl mt-10 text-center">
                  El CARRO esta vacio!!!
                </div>
                <div className="mt-10 text-center">
                  <Link
                    to="/"
                    className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-orange-400 hover:border-orange-400 text-center"
                  >
                    Volver
                  </Link>
                </div>
              </>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex mb-3 items-center justify-between px-60"
                >
                  <div className="w-3/5 ml-3 text-md">{item.title}</div>
                  <button onClick={() => clickRemove(item.id)}>
                    <FaTrash className="text-2xl text-orange-600" />
                  </button>
                  <div className="w-1/5 ml-3 text-lg text-center">
                    Cantidad: {item.count}
                  </div>
                  <div className="w-1/5 ml-3 text-lg text-right font-medium">
                    {"$ " + item.price * item.count}
                  </div>
                </div>
              ))
              )}
          {cart.length !== 0 ? (
              <div className="text-right text-xl font-medium px-20 mt-10">
                <div className="flex justify-center items-center">
                  <button
                    onClick={() => clickClear()}
                    className="mt-5 px-3 py-2 border border-orange-400 rounded-lg text-md font-medium 
                  text-slate-800 bg-orange-200 hover:bg-orange-400 hover:border-orange-300 text-center"
                  >
                    Borrar Todo
                  </button>
                  <div className="text-center lg:text-right mt-5">
                    <Link
                      to="/checkout"
                      className="bg-orange-200 border border-orange-400 text-slate-800 text-md font-medium mt-5 ml-4 py-2 px-3 lg:px-8 rounded-lg hover:bg-orange-400"
                    >
                      Comprar ahora
                    </Link>
                  </div>
                </div>
                TOTAL ${total}
              </div>
            ) : null}
      </div>
    </>
  )
}

export default Cart