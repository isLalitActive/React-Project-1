import { useState } from "react";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
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
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnLabel === "Login" ? setBtnLabel("Logout") : setBtnLabel("Login");
              }}
            >
              {btnLabel}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
