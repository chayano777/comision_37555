import Item from "./Item";

const ItemList = ({ products }) => {
    console.log(products);
  return (
    <div className="grid grid-cols-1 gap-y-20 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-20">
        {products.map((itemsIterados)=>{
            return <Item key={itemsIterados.id} item={itemsIterados} />
        })}
    </div>
    );
};

export default ItemList;
