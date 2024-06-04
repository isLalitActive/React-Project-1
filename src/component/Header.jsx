import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilities/useOnlineStatus";
import UserContext from "../utilities/UserContext";

const Header = () => {
  const [btnLabel, setBtnLabel] = useState("Login");
  const internetStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between bg-gray-200 shadow-xl m-2">
      <div className="logo-container">
        <img
          className="w-52"
          src="https://www.nrn.com/sites/nrn.com/files/styles/article_featured_retina/public/plant-based%20protein.jpg?itok=aDfgI_8Z"
        />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-6">
          <li className="px-4">
            Status: {internetStatus ? "Online" : "Offline"} |
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About</Link>
          </li>
          <li className="px-4">
            <Link to="Contact">Contact</Link>
          </li>
          <li className="px-4">Basket</li>
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
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
