import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "./UserContext";
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

        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <h2>This is Namaste React Application..🚀</h2>
        <br />
        {/* <UserClass /> */}
        {/* <User /> */}
      </div>
    );
  }
}
export default About;
