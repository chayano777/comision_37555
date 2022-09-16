import React from "react";
import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
  return (
    <>
      <h1 className="container text-center py-5 text-orange-600 text-3xl">
        <strong>{props.greeting}</strong>
      </h1>
      <div className="flex justify-center">
        <div className="w-60 h-25 border rounded  p-5 m-5 bg-orange-200">
          <ItemCount stock="5" initial={1} />
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
