import { CLOUD_URL } from "../utils/constants";

const RestCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-80 h-100 bg-white border border-black rounded-lg hover:shadow-xl hover:p-3">
      <img
        src={CLOUD_URL + cloudinaryImageId}
        className="rounded-lg h-[170px] w-[100%]"
        alt="logo"
      ></img>
      <h2 className="py-2 mt-4 text-lg leading-none font-serif font-bold">
        {name}
      </h2>
      <h4 className="font-bold">{cuisines.join(", ")}</h4>
      <h4 className="font-bold">{avgRating} stars</h4>
      <h4 className="font-bold">{costForTwo}</h4>
    </div>
  );
};
export default RestCards;
