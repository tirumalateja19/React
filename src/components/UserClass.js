import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        login: "Dummy",
      },
    };
    // console.log(this.state.userInfo.name + "Constructor");
  }
  async componentDidMount() {
    // console.log(this.state.userInfo.name + "Mount");

    const data = await fetch(" https://api.github.com/users/tirumalateja19");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }
  componentWillUnmount() {
    // console.log("Component will Unmount");
  }
  render() {
    const { name, login } = this.state.userInfo;
    // console.log(this.state.userInfo.name + " Render");
    // debugger;
    return (
      <div id="UserDetails">
        <h2>Name:{name}</h2>
        <h3>Login:{login}</h3>
      </div>
    );
  }
}
export default UserClass;
