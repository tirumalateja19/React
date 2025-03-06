import { useState } from "react";
import ItemsList from "./ItemsList";

const RestCategory = ({ data, showIndex, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-[17px] cursor-pointer">
          {data.title} ({data.itemCards.length})
        </span>
        <span className="cursor-pointer">🔻</span>
      </div>
      <div>{showIndex && <ItemsList items={data?.itemCards} />}</div>
    </div>
  );
};
export default RestCategory;
