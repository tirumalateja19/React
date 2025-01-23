import resList from "../utils/mockdata";
import RestCards from "./RestCards";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import "/index.css";

const Body = () => {
  const [listOfRestaurants, SetListOfRestaurants] = useState(resList);
  const [filteredRestaurantsData, setFilteredRestaurantsData] =
    useState(resList);

  const [searchText, SetSearxhText] = useState("");
  console.log("Body Rendered");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div id="restuarent">
      <div id="filter">
        <div id="search">
          <input
            type="text"
            id="search-bar"
            value={searchText}
            onChange={(e) => {
              SetSearxhText(e.target.value);
            }}
          />
          <button
            id="search-btn"
            onClick={() => {
              console.log(searchText);
              const filteredRestaurants = listOfRestaurants.filter((item) =>
                item.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurantsData(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            setFilteredRestaurantsData(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div id="res-cards">
        {filteredRestaurantsData.map((restaurant) => (
          <RestCards key={restaurant?.data?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
