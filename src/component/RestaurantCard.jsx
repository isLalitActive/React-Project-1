import { CDN_URL } from "../utilities/constant";

const RestaurantCard = ({ resDetails }) => {
    console.log(resDetails);
    const { name, cloudinaryImageId, costForTwo, cuisines, avgRating } =
      resDetails;
  
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="food-image"
          src={ CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3>{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;