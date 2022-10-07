import { createContext, useState, useEffect} from 'react'

export const CartContext = createContext();
const {Provider} = CartContext;


const CartProvider = ({children}) => {
  return (
    <Provider value={{}}>
        {children}
    </Provider>
  )
}

export default CartProvider