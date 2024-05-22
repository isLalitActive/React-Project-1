import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenuAPI from "../utilities/useRestaurantMenuAPI";

const RestaurantMenu = () => {
  const { id } = useParams();
  const resMenu = useRestaurantMenuAPI(id);

  if (resMenu === null) return <Shimmer />;

  const { name } = resMenu?.data?.cards[2]?.card?.card?.info ?? {};

  console.log(
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.carousel
  );
  const menuItems =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.carousel ?? [];

  return (
    <div className="restaurantMenu-container-wrapper">
      <div className="restaurantMenu-container">
        <h2>Restaurant Name: {name}</h2>
        <ul>
          {menuItems.map((items) => {
            return <li key={items.bannerId}>{items.title}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
