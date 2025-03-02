import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import "/index.css";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  // console.log("header rendered");
  useEffect(() => {
    // console.log("useEffect called!");
  }, []);

  return (
    <div className="header">
      <div className="flex bg-black shadow-lg justify-between">
        <div className="logo-container p-2">
          <img className="w-25" src={LOGO_URL}></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-2 m-4">
            <li className="px-4">
              <h2 className="text-white">
                Online Status:{isOnline ? " 🟢" : " 🔴"}
              </h2>
            </li>
            <li className="px-4">
              <Link className="a text-white" to="/">
                Home
              </Link>
            </li>
            <li className="px-4">
              <Link className="a text-white" to="/about">
                About Us
              </Link>
            </li>
            <li className="px-4">
              <Link className="a text-white" to="/contact">
                Contact
              </Link>
            </li>
            <li className="px-4">
              <Link className="a text-white" to="/grocery">
                Grocery
              </Link>
            </li>
            <li className="px-4">
              <Link className="a text-white" to="/cart">
                Cart
              </Link>
            </li>
            <li className="px-4">
              <button
                className="login-btn text-white"
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
