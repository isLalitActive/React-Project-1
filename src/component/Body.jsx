import RestaurantCard from './RestaurantCard';
import resList from '../utilities/data';

const Body = () => {
    return (
      <div className="body-container">
        <div className="search">Search</div>
        <div className="res-container">
          {resList.map((restaurant) => (
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