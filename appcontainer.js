import React from "react";
import reactDom from "react-dom/client";

/*
Swiggy Homepage Component Architecture
1. Header Container
    Logo
    Navigation Bar
2. Body Container
    Search Bar
    Restaurant Container
    Restaurant Card
    Ratings
3. Footer
    Links   
*/

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src="https://img.spoonacular.com/ingredients_100x100/apple.jpg" />
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

const AppContainer = () => {
  return (
    <div className="app-conntainer">
      <Header />
    </div>
  );
};

const root = reactDom.createRoot(document.getElementById('root-container'));
root.render(<AppContainer />)
