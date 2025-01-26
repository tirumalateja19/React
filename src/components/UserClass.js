import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child Constructor");
    super(props);
    this.state = {
      count: 1,
      count2: 3,
    };
  }
  componentDidMount() {
    console.log("Child Mount");
  }
  render() {
    console.log("Child Render");
    const { name, contact } = this.props;
    const { count, count2 } = this.state;
    return (
      <div id="UserDetails">
        <h1>Count:{count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count inc
        </button>
        <h2>Name:{name}</h2>
        <h3>Location:Hyderbad</h3>

        <h3>Contact:{contact}</h3>
      </div>
    );
  }
}
export default UserClass;
