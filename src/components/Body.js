import resList from "../utils/mockdata";
import RestCards from "./RestCards";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { RESTUARENTS } from "../utils/constants";
import { Link } from "react-router";
import "/index.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantsData, setFilteredRestaurantsData] = useState([]);

  const [searchText, SetSearxhText] = useState("");
  // console.log("Body Rendered");

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
    <div className="restuarent">
      <div className="flex" items-center>
        <div className="flex  m-4 p-4">
          <input
            type="text"
            className=" border border-solid border-black shadow-lg"
            value={searchText}
            onChange={(e) => {
              SetSearxhText(e.target.value);
            }}
          />
          <button
            className="bg-green-300 px-3 ml-5 rounded-sm shadow"
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
            className="bg-amber-300 px-3.5 shadow"
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
      </div>
      <div className="flex flex-wrap">
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
