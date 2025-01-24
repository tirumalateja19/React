import { CLOUD_URL } from "../utils/constants";

const RestCards = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId } = resData?.info;
  return (
    <div id="card-res">
      <img src={CLOUD_URL + cloudinaryImageId} id="image" alt="logo"></img>
      <h2>{name}</h2>
      <br></br>
      <h4>{cuisines.join(", ")}</h4>
      <br></br>
      <h4>{avgRating} stars</h4>
    </div>
  );
};
export default RestCards;
