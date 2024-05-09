import React from "react";
import { useSelector } from "react-redux";

const CategoryHeader = () => {
  const { Category, Subcategory } = useSelector(
    (state) => state.category
  );

  return (
    <>
      <h1 className="font-semibold text-3xl my-5">
        Select the types of products you want to sell
      </h1>
      <div className="py-2 mt-2">
        <h3 className="text-lg">
          {" "}
          <span className="text-[#6C6C6C] font-semibold">
            Product Classifier :{" "}
          </span>
          <span className="">{Category !== null ? Category + " >" : ""} </span>
          <span className="text-primary">{Subcategory} </span>
        </h3>
      </div>
    </>
  );
};

export default CategoryHeader;
