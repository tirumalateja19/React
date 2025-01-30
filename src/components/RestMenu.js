import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";

const Restaurent_menu = () => {
  const { resId } = useParams();
  const menuCards = useRestaurentMenu(resId);

  if (menuCards === null) return <Shimmer />;

  const { name, cuisines, avgRating, areaName } =
    menuCards?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuCards?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div id="menu-container">
      <div id="resta-name">
        <h1>{name}</h1>
        <br />
        <div id="contents">
          <h2>AvgRating : {avgRating}</h2>
          <h3>Cuisines : {cuisines.join(", ")} </h3>
          <h3>Area : {areaName}</h3>
          <br />
        </div>
      </div>
      <div id="menu-list">
        <h2>Menu Details:</h2>
        <br />
        <ul>
          {itemCards.map((item) => (
            <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}-{" Rs. "}
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Restaurent_menu;
