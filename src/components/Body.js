import resList from "../utils/mockdata";
import RestCards from "./RestCards";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { RESTUARENTS } from "../utils/constants";
import { Link } from "react-router";
import "/index.css";
import UserContext from "./UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantsData, setFilteredRestaurantsData] = useState([]);

  const [searchText, SetSearxhText] = useState("");

  // similarly how we accessed loggedInUser from the UserContext using useContext hook in header, now we are accessing the setuserName from the UserContext only, but from app.js updated version that is UserContextProvider
  const { setuserName, loggedInUser } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTUARENTS);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantsData(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="restuarent bg-[#FFF7EC] pl-[55px]">
      <div className="flex items-center justify-center">
        <div className="flex  m-4 p-4">
          <input
            type="text"
            className="w-72 border border-solid border-[#FB7117] rounded-xl shadow-xl p-1.5"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              SetSearxhText(e.target.value);
            }}
          />
          <button
            className="bg-[#FB7117] font-semibold text-white px-3 ml-5 rounded-xl shadow-lg cursor-pointer"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((item) =>
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantsData(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className="flex  m-4 p-4">
          <button
            className="bg-[#F73E53] text-white rounded-xl font-semibold px-3 h-8 shadow-lg cursor-pointer"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.avgRating > 4
              );
              setFilteredRestaurantsData(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="flex  m-4 p-4">
          <label className="text-lg font-semibold mr-1.5">UserName :</label>
          <input
            className="border border-solid border-[#FB7117] shadow-xl p-0.5"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap ml-8">
        {filteredRestaurantsData.map((restaurant) => (
          <Link
            id="a"
            key={restaurant?.info?.id}
            to={"/restaurents/" + restaurant?.info?.id}
          >
            <RestCards resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
