import ItemCount from "./ItemCount";

const Item = ({ item }) => {
  //let {price, title, imagen, detail, stock} = props;
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
      <ItemCount initial={1} stock={item.stock} />
    </div>
  );
};

export default Item;
