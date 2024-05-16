import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  console.log("Inside RestaurantMenu component");
  const [resMenu, setResMenu] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("Inside useEffect");
  }, []); //remove the empty array and see how useEffect works with console data

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9314158&lng=77.6300557&restaurantId=19563&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await response.json();
    console.log(json?.data?.cards[2]?.card?.card?.info);
    setResMenu(json?.data?.cards[2]?.card?.card.info);
  };

  const {
    name,
    avgRating,
    costForTwoMessage,
    areaName,
    sla,
    cuisines,
  } = resMenu;

  return (
    <div className="restaurantMenu-container-wrapper">
      {console.log("RENDERING")}
      <div className="restaurantMenu-container">
        <h1>Restaurant Name: {name}</h1>
        <p>Rating: {avgRating}</p>
        <h2>Cost for Two: {costForTwoMessage}</h2>
        <h3>Location: {areaName}</h3>
        <h3>Delivery Time: {sla?.deliveryTime}</h3>
        <h3>Cuisines: {cuisines}</h3>
        <h3>Deals for you: {}</h3>
      </div>
    </div>
  );
};

export default RestaurantMenu;
