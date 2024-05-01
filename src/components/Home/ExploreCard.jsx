import React from "react";

const ExploreCard = ({ quantity, category, borderE }) => {
  return (
    <div
      className={`text-white xl:1-[18%] lg:w-[22%] md:w-[34%] w-[51%] mb-5 lg:mb-0 lg:leading-10 ${
        borderE === "true"
          ? "lg:border-e-4 rounded-sm border-gray-500"
          : "border-e-0"
      } `}
    >
      <p className={`text-[48px] font-semibold`}>{quantity}</p>
      <p className="text-[30px] font-normal lg:leading-8">{category}</p>
    </div>
  );
};

export default ExploreCard;
