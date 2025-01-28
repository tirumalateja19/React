import { Component } from "react";
class Contact extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("Namaste OP 🚀 of contact");
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("Unmounted");
  }
  render() {
    return (
      <div id="contact-container">
        <h1>Contact</h1>
        <h2>For more details:xxxxxxxxxx</h2>
      </div>
    );
  }
}
export default Contact;
