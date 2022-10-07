import { createContext, useState, useEffect} from 'react'

export const cartContext = createContext();
const {Provider} = cartContext;


const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    const [qtyProd, setQtyProd] = useState([0]);

    useEffect(()=>{
      let cant = 0;
      cart.forEach(x=>{
        cant += x.count
      });
      setQtyProd(cant)
    }, [cart])

    function addItem(idProd, count) {
        let newCart = cart.map(item=>item);
        newCart.push({...idProd, count});
        setCart(newCart);
    }

  return (
    <Provider value={{cart, addItem, qtyProd}}>
        {children}
    </Provider>
  )
}

export default CartProvider