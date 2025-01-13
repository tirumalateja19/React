import React from "react";
import ReactDOM from "react-dom/client";

const Heading1 = () => <h1 id="heading">1.Welcome to react 🚀🚀</h1>;
const Heading2 = () => <h1>2.React is very simple...</h1>;
const Heading3 = () => {
  return <h1>3.We are React Functional Components</h1>;
};
const HeadingComposition = () => (
  <div id="container">
    <Heading1 />
    {Heading2()}
    <Heading3></Heading3>
    <br></br>
    <div id="inside">
      <h1>This is React Component Composition</h1>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComposition />);
