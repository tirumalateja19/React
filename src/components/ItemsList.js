import { CLOUD_URL, vessel } from "../utils/constants";

const ItemsList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="m-2 p-2 border-gray-300 border-b-2 text-left flex justify-between items-center"
        >
          {/* Left Section: Name, Price, Description */}
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
            <p className="text-sm">{item?.card?.info?.description}</p>
          </div>

          {/* Right Section: Image and Button */}
          <div className="w-3/12 p-4 flex flex-col items-center relative">
            <div className="absolute top-2">
              <button className="w-16 h-7 bg-black text-white opacity-80 border text-center">
                Add+
              </button>
            </div>

            {/* Image with fixed height */}
            <div className="w-full h-32 flex justify-center items-center">
              <img
                src={
                  item?.card?.info?.imageId
                    ? CLOUD_URL + item.card.info.imageId
                    : vessel
                }
                className="w-full h-full object-cover rounded-lg"
                alt={item?.card?.info?.name}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
