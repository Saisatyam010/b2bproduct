import React from "react";
import CategorySlider from "./Categoryslider";

const Category = () => {
  return (
    <div className="container mx-auto px-4 sm:px-3 py-6 my-10">
      <h1 className=" font-semibold text-[39px] text-center mb-10">
        What are you Looking today?
      </h1>
      <CategorySlider />
    </div>
  );
};

export default Category;
