import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { cartContext } from "../context/cartContext";

const CartWidget = () => {
  const { qtyProd } = useContext(cartContext);

  return (
    <div className="flex">
      <div className="flex relative ml-5">
        <div className="">
          <BsCart4 className="text-orange-900 text-2xl ml-2 mr-5" />
        </div>
        {qtyProd !== 0 ? (
          <div className="absolute -top-2 -right-0 bg-orange-700 rounded-full h4 w-4 font-medium text-xs text-center text-white">
            <p>{qtyProd}</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default CartWidget;
