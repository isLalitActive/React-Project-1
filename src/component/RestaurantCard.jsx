import { CDN_URL } from "../utilities/constant";

const RestaurantCard = ({ resDetails }) => {
  console.log(resDetails);
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla } =
    resDetails?.info;

  return (
    <div className="res-card p-4 m-4 w-[200px] bg-orange-300 rounded-lg hover:bg-orange-400">
      <img
        className="res-logo rounded-lg"
        alt="food-image"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
    </div>
  );
};


export const withLabelRestaurantCard = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute p-2 m-3 bg-blue-300 rounded-md text-white">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
