import resList from "../utils/mockdata";
import RestCards from "./RestCards";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import "/index.css";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurantsData, setFilteredRestaurantsData] = useState([]);

  const [searchText, SetSearxhText] = useState("");
  console.log("Body Rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4989841&lng=78.4176358&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
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
                item.info.name.toLowerCase().includes(searchText.toLowerCase())
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
          <RestCards key={restaurant?.info?.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
