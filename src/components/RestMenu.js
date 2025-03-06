import Shimmer from "./shimmer";
import { useParams } from "react-router";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import RestCategory from "./RestCategory";
import { useState } from "react";

const Restaurent_menu = () => {
  const { resId } = useParams();
  const menuCards = useRestaurentMenu(resId);

  const [showIndex, setshowIndex] = useState(null);

  if (menuCards === null) return <Shimmer />;

  const { name, cuisines, avgRating, areaName, costForTwoMessage } =
    menuCards?.cards[2]?.card?.card?.info;

  const { itemCards } =
    menuCards?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  // console.log(menuCards?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    menuCards?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(categories);
  return (
    <div className="text-center">
      <h1 className="my-6 font-bold text-xl">{name}</h1>
      <h3 className="font-bold">
        {cuisines.join(", ")} - {costForTwoMessage}{" "}
      </h3>
      {categories.map((category, index) => (
        <RestCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showIndex={index == showIndex ? true : false}
          setshowIndex={() => setshowIndex(index)}
        />
      ))}
    </div>
  );
};
export default Restaurent_menu;
