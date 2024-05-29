import RestaurantCard, { withLabelRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [resListDetails, setResListDetails] = useState([]);
  const [searchItem, setSearchItem] = useState("");

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

  const PromotedRestaurantCard = withLabelRestaurantCard(RestaurantCard);

  return (
    <div className="body-container">
      <div className="search-container">
        <input
          type="text"
          className="border border-solid border-black px-4 py-1 rounded-md"
          value={searchItem}
          onChange={(e) => {
            setSearchItem(e.target.value);
          }}
        ></input>
        <button
          className="px-4 py-1.5 bg-neutral-200 m-4 rounded-md hover:bg-neutral-300"
          onClick={() => {
            const filtered = resListDetails.filter((item) => {
              return item.info.name
                .toLowerCase()
                .includes(searchItem.toLowerCase());
            });
            setResListDetails(filtered);
          }}
        >
          Search
        </button>
        <button
          className="px-4 py-1.5 bg-blue-200 rounded-md hover:bg-blue-300"
          onClick={() => {
            const filteredRes = resListDetails.filter((eachRestaurant) => {
              return eachRestaurant.info.avgRating > 4.3;
            });
            setResListDetails(filteredRes);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>

      {resListDetails.length === 0 ? <Shimmer /> : null}
      <div className="res-container flex flex-wrap">
        {resListDetails.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurant-menu/" + restaurant?.info?.id}
          >
            {restaurant?.info?.isOpen ? (
              <PromotedRestaurantCard resDetails={restaurant} />
            ) : (
              <RestaurantCard resDetails={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
