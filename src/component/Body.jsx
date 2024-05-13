import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resListDetails, setResListDetails] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9314583&lng=77.6299858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTINGhttps://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9314583&lng=77.6299858&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setResListDetails(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return (
    <div className="body-container">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredRes = resListDetails.filter((eachRestaurant) => {
            return eachRestaurant.info.avgRating > 4.3;
          });
          setResListDetails(filteredRes);
        }}
      >
        Filter
      </button>
      {resListDetails.length === 0 ? <Shimmer /> : null}
      <div className="res-container">
        {resListDetails.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} resDetails={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
