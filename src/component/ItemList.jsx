const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => {
        <div key={item?.info?.id}>
          <div>
            <span>{item?.card?.info?.name}</span>
            <span>{item?.card?.info?.price / 100}</span>
          </div>

          <p>{item?.car?.info?.description}</p>
        </div>;
      })}
      Hello
    </div>
  );
};

export default ItemList;
