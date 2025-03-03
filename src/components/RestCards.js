import { CLOUD_URL } from "../utils/constants";

const RestCards = (props) => {
  const { resData, category } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;

  return (
    <div className="m-4 p-4 w-80 h-100 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
      {category && (
        <span className="absolute -mt-5 ml-4 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-lg">
          {category}
        </span>
      )}

      <img
        src={CLOUD_URL + cloudinaryImageId}
        className="rounded-lg h-[170px] w-full object-cover"
        alt="Restaurant"
      />

      <h2 className="mt-4 text-lg font-serif font-bold">{name}</h2>
      <h4 className="text-gray-700">{cuisines.join(", ")}</h4>

      <div className="flex justify-between items-center mt-2">
        <span className="text-green-600 font-bold">{avgRating} ★</span>
        <span className="text-gray-800 font-semibold">{costForTwo}</span>
      </div>
    </div>
  );
};

export default RestCards;
