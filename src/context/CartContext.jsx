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
        if(isInCart(idProd.id)){
          let newCart = cart.map(itemMap=>{
            if(itemMap.id === idProd.id){
              itemMap.count += count
              return itemMap
            }else 
            return itemMap
          });
          setCart(newCart)
        }else{
          let newCart = cart.map(item=>item);
          newCart.push({...idProd, count});
          setCart(newCart);
        }
    }

    const removeItem = (id) => {
      setCart(cart.filter(el => el.id !== id))
  }

    const clearCart = (idProd) => {
      setCart([]);
  }

    const isInCart = (id) => {
      return cart.some(el=>el.id===id);
    }

    const getTotalAmount = () => {
      return cart.reduce((acc, x)=> acc += x.price  * qtyProd, 0)
    }

    /*function getTotalPriceInCart() {
      let total=0;
      cart.forEach((item) => total += item.price * item.count);
      return total
    }*/

  return (
    <Provider value={{cart, addItem, qtyProd, isInCart, clearCart, removeItem, getTotalAmount}}>
        {children}
    </Provider>
  )
}

export default CartProvider