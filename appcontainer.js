import React from "react";
import reactDom from "react-dom/client";

/*
Swiggy Homepage Component Architecture
1. Header Container
    Logo
    Navigation Bar
2. Body Container
    Search
    Restaurant Container
    Restaurant Card
        Image
        Name
        Rating
    Ratings
3. Footer
    Links   
*/

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.spoonacular.com/ingredients_100x100/apple.jpg"
        />
      </div>
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Basket</li>
        </ul>
      </div>
    </div>
  );
};

const resCardStyle = {
  backgroundColor: "black",
};

const RestaurantCard = () => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="food-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"
      ></img>
      <h3>Meghna Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppContainer = () => {
  return (
    <div className="app-conntainer">
      <Header />
      <Body />
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById("root-container"));
root.render(<AppContainer />);
