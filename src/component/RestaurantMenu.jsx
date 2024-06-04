import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuAPI from "../utilities/useRestaurantMenuAPI";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resMenu = useRestaurantMenuAPI(id);

  const [showIndex, setShowIndex] = useState(0);

  if (resMenu === null) return <Shimmer />;

  const { name } = resMenu?.data?.cards[2]?.card?.card?.info ?? {};

  // console.log(
  //   resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );
  const categories =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (row) =>
        row?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center ">
      <h2 className="font-bold my-4 text-2xl">Restaurant Name: {name}</h2>
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
