/*
Create this html structure using React
    <div id='parent'>
        <div id='child-1'>
            <h1>I'm h1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
        <div id='child-2'>
            <h1>I'm h1 tag</h1>
            <h2>I am h2 tag</h2>
        </div>
    </div>
*/

const heading = React.createElement(
  "h1",
  {
    id: "heading",
    name: "title",
  },
  "Hello from React"
);
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root-container"));
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child-1" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child-2" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
]);
console.log(parent);

const root2 = ReactDOM.createRoot(document.getElementById("parent-container"));
root2.render(parent);
