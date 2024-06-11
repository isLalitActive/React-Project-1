import { CDN_URL } from "../utilities/constant";
import { addItem } from "../utilities/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-10/12">
            <div className="py-2">
              <span className="font-bold">{item?.card?.info?.name} - ₹</span>
              <span className="font-medium">
                {item?.card?.info?.price / 100}
              </span>
            </div>

            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
          <div className="w-2/12 p-4">
            <div className="absolute">
              <button
                className="bg-white p-1 shadow-lg m-auto"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
