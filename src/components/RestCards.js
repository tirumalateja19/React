import { CLOUD_URL } from "../utils/constants";

const RestCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo } =
    resData?.info;
  return (
    <div className="m-4 p-4 w-[17vw] h-[50vh] bg-stone-50  hover:bg-white rounded-lg hover:shadow-2xl hover:p-3">
      <img
        src={CLOUD_URL + cloudinaryImageId}
        className="rounded-lg h-[170px] w-[100%]"
        alt="logo"
      ></img>
      <h2 className="font-bold py-2 mt-4 text-lg leading-none">{name}</h2>
      <h4 className="font-semibold">{cuisines.join(", ")}</h4>
      <h4 className="font-semibold">{avgRating} stars</h4>
      <h4 className="font-semibold">{costForTwo}</h4>
    </div>
  );
};
export default RestCards;
