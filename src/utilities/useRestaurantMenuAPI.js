import { useEffect, useState } from "react";
import { REST_MENU } from "./constant";

const useRestaurantMenuAPI = (id) => {
  const [restaurantMenuInfo, setRestaurantMenuInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    const response = await fetch(REST_MENU + id);
    const json = await response.json();
    setRestaurantMenuInfo(json);
  };

  return restaurantMenuInfo;
};

export default useRestaurantMenuAPI;
