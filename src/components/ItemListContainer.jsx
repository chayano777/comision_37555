import React from 'react'

const ItemListContainer = (props) => {
  return (
    <h1 className="container text-center py-5 text-orange-700 text-3xl"><strong>{props.greeting}</strong></h1>
  )
}

export default ItemListContainer