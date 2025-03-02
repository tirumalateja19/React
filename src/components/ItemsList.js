import { CLOUD_URL } from "../utils/constants";
const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-semibold">{item?.card?.info?.name}</span>
              <span>
                {" "}
                ₹{" "}
                {item?.card?.info?.defaultPrice / 100 ||
                  item?.card?.info?.price / 100}
              </span>
            </div>
            <p className="text-sm ">{item?.card?.info?.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="w-16 h-7 cursor-pointer bg-black text-white opacity-80 border-1 text-center mx-10 my-22">
                Add+
              </button>
            </div>
            <img
              src={CLOUD_URL + item?.card?.info?.imageId}
              className="w-full"
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemsList;
