import React from "react";
import ReactDOM from "react-dom/client";

/*Create html structure using JSX: React Element*/
const message1 = <h1 className="heading" tabIndex='2'>This is coming from JSX, Its a function only</h1>;

//React Element
const message2 = (
  <h1 className="heading" tabIndex="2">
    This is coming from JSX as well, and both approach are correct
  </h1>
);

const Heading = () => (
  <div className="heading-container">
    <h1>This is coming from React Component as well</h1>
  </div>
);

const Message = () => (
  <div id="div-container">
    <Heading />
    <h1 className="react-heading" tabIndex='2'>This is coming from React Component</h1>
  </div>
);


const root = ReactDOM.createRoot(document.getElementById("root-container"));

root.render(<Message />);
