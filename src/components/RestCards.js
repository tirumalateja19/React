import { CLOUD_URL } from "../utils/constants";

const RestCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.data;
  return (
    <div id="card-res">
      <img src={CLOUD_URL + cloudinaryImageId} id="image" alt="logo"></img>
      <h1>{name}</h1>
      <br></br>
      <h4>{cuisines.join(", ")}</h4>
      <br></br>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestCards;
