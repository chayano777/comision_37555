import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, initial=1, onAddToCart}) => {
    const [count, setCount] = useState(initial);

    const add = () => {
        if(count<stock){
            setCount(count+1);
        } else {
            alert("No hay más productos disponibles");
        }
    }
    const rest = () => {
        setCount(Math.max(count -1,1));
    }
  return (
    <>
    <div className='flex justify-center'>
        <button className='bg-orange-500 hover:bg-orange-200 hover:text-orange-500 text-white font-bold py-2 px-4 m-4 rounded' onClick={rest}><strong>-</strong></button>
        <h3 className='p-5 bg-white rounded-full'>{count}</h3>
        <button className='bg-orange-500 hover:bg-orange-200 hover:text-orange-500 text-white font-bold py-2 px-4 m-4 rounded' onClick={add}><strong>+</strong></button>
    </div>
    <div className='flex justify-center items-center'>
        <button onClick={ () => onAddToCart(count)} className='bg-orange-500 hover:bg-orange-200 hover:text-orange-500 text-white font-bold rounded py-2 px-4 my-5'>Agregar</button>
    </div>
    </>
  )
}

export default ItemCount
