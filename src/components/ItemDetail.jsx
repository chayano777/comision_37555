import ItemCount from "./ItemCount";

const ItemDetail = ({ idProd }) => {
  console.log(idProd);
  return (
    <div className="my-10 mx-3 w-1/2 h-1/2 border rounded shadow-md bg-orange-100 overflow-hidden transition-property: all duration-100 ease-in min-h-280">
      <div className="flex justify-evenly border-2 border-orange-700 border-solid rounded-xl">
        <div className="mx-5 my-5 w-72 h-64 object-cover">
          <img
            className="border-2 border-gray-200 border-solid rounded-xl w-full h-full"
            src={idProd.imagen}
            alt=""
          ></img>
        </div>
        <div className="py-3 px-2">
          <h3 className="py-2 text-orange-700 text-lg font-bold text-center">
            {idProd.title}
          </h3>
          <p className="py-2">{idProd.detail}</p>
          <h4 className="py-2 text-center font-bold">$ {idProd.price}</h4>
          <div className="py-10">
            <ItemCount initial={1} stock={idProd.stock} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
