import React from 'react'
import { BsCart4 } from "react-icons/bs";

const CartWidget = () => {
  return (
    <div className="flex">
      <div className="flex relative ml-5">
        <div className="">
          <BsCart4 className="text-orange-900 text-2xl ml-2 mr-10" />
        </div>
      </div>
    </div>
  )
}

export default CartWidget