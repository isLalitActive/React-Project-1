import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { REST_MENU } from "../utilities/constant";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [resMenuItems, setResMenuItems] = useState([]);

  const restaurantId = useParams();
  console.log(restaurantId);

  useEffect(() => {
    fetchData();
  }, []); // remove the empty array and see how useEffect works with console data

  const fetchData = async () => {
    const response = await fetch(REST_MENU + restaurantId);
    const json = await response.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setResMenu(json?.data?.cards[2]?.card?.card.info);

    console.log(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
    setResMenuItems(
      json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
        ?.card?.itemCards
    );
  };

  if (resMenu === null) return <Shimmer />;

  const { name, avgRating, costForTwoMessage, areaName, sla, cuisines } =
    resMenu;

  return (
    <div className="restaurantMenu-container-wrapper">
      <div className="restaurantMenu-container">
        <h1>Restaurant Name: {name}</h1>
        <p>Rating: {avgRating}</p>
        <h2>Cost for Two: {costForTwoMessage}</h2>
        <h3>Location: {areaName}</h3>
        <h3>Delivery Time: {sla?.deliveryTime}</h3>
        <h3>Cuisines: {cuisines}</h3>
        <h3>Recommended Items</h3>
        <ul>
          {resMenuItems.map((items) => {
            return <li>{items.card.info.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
