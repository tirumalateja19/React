import LOGO_URL from "../utils/constants";
const Header = () => (
  <div id="header">
    <div id="food-app-nav">
      <div id="logo">
        <img src={LOGO_URL}></img>
      </div>
      <div id="nav">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);
export default Header;
