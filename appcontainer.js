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
          src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/plant-based%20protein.jpg?itok=aDfgI_8Z"
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
      <h3>Chinese Wok</h3>
      <h4>Chinese, Indian </h4>
      <h4>4.4</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
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
