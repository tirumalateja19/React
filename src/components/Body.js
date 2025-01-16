import resList from "../utils/mockdata";
import RestCards from "./RestCards";
import { useState } from "react";

const Body = () => {
  const [listOfRestaurants, SetListOfRestaurants] = useState(resList);

  return (
    <div id="restuarent">
      <div id="search">
        <button
          id="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            SetListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div id="res-cards">
        {listOfRestaurants.map((restaurant) => (
          <RestCards key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
export default Body;
