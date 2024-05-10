import RestaurantCard from "./RestaurantCard";
import resList from "../utilities/data";
import { useState } from "react";

const Body = () => {
  const [resListDetails, setResListDetails] = useState(resList);

  return (
    <div className="body-container">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredRes = resListDetails.filter((res) => {
            return res.info.avgRating > 4.3;
          });
          setResListDetails(filteredRes);
        }}
      >
        Filter
      </button>
      <div className="res-container">
        {resListDetails.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            resDetails={restaurant.info}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
