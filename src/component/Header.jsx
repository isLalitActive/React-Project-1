import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const internetStatus = useOnlineStatus();

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
          <li>Online Status: {internetStatus ? 'Online': 'Offline'}</li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="Contact">Contact</Link></li>
          <li>Basket</li>
          <li>
            <button
              className="login-btn"
              onClick={() => {
                btnLabel === "Login"
                  ? setBtnLabel("Logout")
                  : setBtnLabel("Login");
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
