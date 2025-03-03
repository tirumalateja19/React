const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap mt-25 pl-[55px]">
      {Array(8).fill("").map((_, index) => (
        <div
          key={index}
          className="p-4 w-80 h-100 bg-gray-200 m-4 rounded-lg"
        >
          <div className="shimmer-head rounded-lg h-[170px] w-[100%] bg-gray-100"></div>
          <div className="shimmer-text h-[20px] w-[60%] bg-gray-100 mt-4 rounded-lg"></div>
          {Array(6).fill("").map((_, i) => (
            <div
              key={i}
              className="shimmer-para h-[15px] w-[99%] bg-gray-100 my-2"
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
