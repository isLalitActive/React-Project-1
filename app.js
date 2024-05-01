import React from "react";
import ReactDOM from "react-dom/client";

/*Create html structure using JSX*/
const message = (
  <h1 className="heading" tabIndex="2">
    This is coming from JSX
  </h1>
);
const root = ReactDOM.createRoot(document.getElementById("root-container"));

root.render(message);
