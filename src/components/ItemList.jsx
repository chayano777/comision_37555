import Item from "./Item";

const ItemList = ({ items }) => {
    console.log(items);
  return (
    <div className="grid grid-cols-1 gap-y-20 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-20">
        {items.map((itemsIterados)=>{
            return <Item item={itemsIterados} />
        })}
    </div>
    );
};

export default ItemList;
