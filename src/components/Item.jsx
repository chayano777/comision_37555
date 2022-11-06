import { Link } from "react-router-dom";


const Item = ({ item }) => {
 
  const urlDetail = `/category/${item.category}/${item.id}`
  return (
    <div className="my-4 mx-3 w-full h-full border rounded shadow-md bg-white overflow-hidden transition-property: all duration-100 ease-in min-h-280">
      <div className="w-72 h-64 object-cover">
        <img
          className="w-full h-full object-contain"
          src={item.imagen}
          alt=""
        ></img>
      </div>
      <div className="py-3 px-2">
        <h3><strong>{item.title}</strong></h3>
        <p>{item.detail}</p>
        <h4>$ {item.price}</h4>
      </div>
      <div className="flex justify-center">
      <Link to={urlDetail} className="bg-orange-500 hover:bg-orange-200 hover:text-orange-500 text-white font-bold py-2 px-4 m-4 rounded"><strong>Detalle</strong></Link>
      </div>
    </div>
  );
};

export default Item;
