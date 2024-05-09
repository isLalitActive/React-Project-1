import React from "react";
import reactDom from "react-dom/client";
import Header from '././src/component/Header';
import Body from "./src/component/Body";

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
