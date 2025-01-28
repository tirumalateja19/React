import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import "/index.css";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  // console.log("header rendered");
  useEffect(() => {
    // console.log("useEffect called!");
  }, []);

  return (
    <div id="header">
      <div id="food-app-nav">
        <div id="logo">
          <img src={LOGO_URL}></img>
        </div>
        <div id="nav">
          <ul>
            <li>
              <Link id="a" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link id="a" to="/about">
                About Us
              </Link>
            </li>
            <li>
              <Link id="a" to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link id="a" to="/cart">
                Cart
              </Link>
            </li>
            <li>
              <button
                className="login-btn"
                onClick={() => {
                  btnName === "Login"
                    ? setBtnName("Logout")
                    : setBtnName("Login");
                }}
              >
                {btnName}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Header;
