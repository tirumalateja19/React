import { CLOUD_URL } from "../utils/constants";

const RestCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div className="m-4 p-4 w-[17vw] h-[50vh] border-x-indigo-100 hover:bg-gray-100 rounded-lg shadow-lg">
      <img
        src={CLOUD_URL + cloudinaryImageId}
        className="rounded-lg h-[170px] w-[100%]"
        alt="logo"
      ></img>
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <br></br>
      <h4>{cuisines.join(", ")}</h4>
      <br></br>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestCards;
