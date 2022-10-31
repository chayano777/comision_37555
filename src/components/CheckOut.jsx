import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import { BsEmojiWink } from "react-icons/bs";
import { useState, useEffect } from "react";





const Checkout = () => {
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[]);

  return (
    <div className="flex justify-center">
        {loading ? <Spinner spinner={Spinner} /> : <div className='text-orange-700 font-bold text-3xl mt-10 mb-10 text-center'>Gracias por tu compra!!!</div>}
      </div>
    
  )
}

export default Checkout