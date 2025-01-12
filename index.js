import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement(
      "h1",
      { id: "elem" },
      "Welcome to Namaste React 🚀🚀!!"
    ),
    React.createElement("h2", { id: "elem" }, "Welcome 🚀"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
