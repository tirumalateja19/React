import User from "./User";
import UserClass from "./UserClass";
import React from "react";
class About extends React.Component {
  constructor(props) {
    // console.log("Parent Constructor");
    super(props);
  }
  componentDidMount() {
    // console.log("Parent Mount");
  }
  render() {
    // console.log("Parent Render");

    return (
      <div id="About-container">
        <h1>About Us</h1>
        <h2>This is Namaste React Application..🚀</h2>
        <br />
        {/* <UserClass /> */}
        {/* <User /> */}
      </div>
    );
  }
}
export default About;
