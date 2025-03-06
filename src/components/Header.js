import { useContext, useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "./UserContext";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const isOnline = useOnlineStatus();
  // Here we are accessing the UserContext using the react hook useContext
  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="header">
      <div
        className="flex justify-between items-center shadow-lg px-6 py-2 h-[100px] 
                      bg-gradient-to-r from-orange-500 via-red-500 to-pink-500"
      >
        <div className="p-2">
          <img className="w-20 h-20" src={LOGO_URL} alt="Logo" />
        </div>

        <div className="flex items-center">
          <ul className="flex space-x-6">
            <li>
              <h2 className="text-white font-semibold">
                Online Status: {isOnline ? "🟢" : "🔴"}
              </h2>
            </li>
            <li>
              <Link className="text-white font-medium hover:underline" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:underline"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:underline"
                to="/contact"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:underline"
                to="/grocery"
              >
                Grocery
              </Link>
            </li>
            <li>
              <Link
                className="text-white font-medium hover:underline"
                to="/user"
              >
                UserClass
              </Link>
            </li>
            <li>
              <p className="text-white font-medium ">
                {/* simply we can access the prop from useContext hook above */}
                {loggedInUser}
              </p>
            </li>
            <li>
              <button
                className="bg-white text-orange-600 font-semibold px-4 py-1 rounded-xl shadow-md 
                           hover:bg-orange-500 hover:text-white transition-all cursor-pointer"
                onClick={() =>
                  setBtnName(btnName === "Login" ? "Logout" : "Login")
                }
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
