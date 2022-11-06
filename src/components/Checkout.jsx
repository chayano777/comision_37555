import { Link } from "react-router-dom";
import { BsEmojiWink } from "react-icons/bs";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const {orderid} = useParams();

  return (
    <div className="flex mt-10 mb-28 items-center justify-start bg-white px-10 lg:px-0">
      <div className="mx-auto w-full max-w-lg text-center">
        <BsEmojiWink className="w-full text-6xl my-10" />
        <h1 className="text-2xl lg:text-4xl font-medium">
          Gracias por tu compra!
        </h1>
        <p className="mt-3">El número de comprobante de tu compra es:</p>
        <p className="mt-3 text-lg font-medium">{orderid}</p>
        <Link to="/" className="text-blue-500 text-sm mt-10">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
