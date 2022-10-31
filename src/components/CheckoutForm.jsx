import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../context/cartContext";
import { createBuyOrder } from "../services/firestore";

const CheckoutForm = () => {
  const { cart, clearCart } = useContext(cartContext);
  const navigate = useNavigate();
  const [dataForm, setDataForm] = useState({
    name: "",
    surname: "",
    mail: "",
    phone: "",
  });

  const [total, setTotal] = useState(0);

  useEffect(() => {
    let a = 0;
    cart.forEach((item) => {
      a += item.price * item.count;
    });
    setTotal(a);
  }, [cart]);

  

  function handleCheckOut(event) {
    /* {buyer: {name, phone, mail}, items: [{id, title, price}], total */
    event.preventDefault();
    console.log(dataForm);
    const orderData = {
      buyer: dataForm,
      items: cart,
      total: total,
    };
    createBuyOrder(orderData).then((orderid) => {
      navigate(`/checkout/${orderid}`);
      clickClear();
    });
    
  }

  function inputChangeHandler(e) {
    let inputName = e.target.name;
    let value = e.target.value;

    const newDataForm = { ...dataForm };
    newDataForm[inputName] = value;
    setDataForm(newDataForm);
  }

  const clickClear = () => {
    clearCart();
  };

  return (
    <div className="flex mt-10 mb-28 items-center justify-start bg-white px-10 lg:px-0">
      <div className="mx-auto w-full max-w-lg">
        <p className="mt-3 text-center">
          Completar el <strong className="text-orange-600">Formulario</strong>{" "}
          para finalizar la compra
        </p>

        <form onSubmit={handleCheckOut} className="mt-10">
          <div className="grid gap-10 sm:grid-cols-1">
            <div className="relative z-0">
              <input
                onChange={inputChangeHandler}
                value={dataForm.name}
                name="name"
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-orange-600 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                placeholder="Nombre"
                required
              />
            </div>
            <div className="relative z-0">
              <input
                onChange={inputChangeHandler}
                value={dataForm.surname}
                name="surname"
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-orange-500 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                placeholder="Apellido"
                required
              />
            </div>
            <div className="relative z-0">
              <input
                onChange={inputChangeHandler}
                value={dataForm.mail}
                name="mail"
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-orange-500 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative z-0">
              <input
                onChange={inputChangeHandler}
                value={dataForm.phone}
                name="phone"
                type="text"
                className="peer block w-full appearance-none border-0 border-b border-orange-500 bg-transparent py-2.5 px-0 text-sm text-slate-900 focus:border-orange-600 focus:outline-none focus:ring-0"
                placeholder="Telefono"
                required
              />
            </div>
          </div>
          <div className="text-center mt-5">
            <button
              type="submit"
              className="bg-orange-200 border border-orange-400 text-slate-800 text-md font-medium mt-5 ml-4 py-2 px-3 lg:px-8 rounded-lg hover:bg-orange-400"
            >
              Comprar ahora
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutForm;
