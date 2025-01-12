const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "elem" }, "Welcome to React!!"),
    React.createElement("h2", { id: "elem" }, "Welcome to React!!"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
