import React from "react";
import SimiliarProductslider from "./SimiliarProductslider";

const SimiliarProduct = () => {
  return (
    <div className=" w-full mt-6 py-6">
      <h1 className=" text-[26px] font-semibold text-black">
        Similar Products you must like{" "}
      </h1>
      <SimiliarProductslider />
    </div>
  );
};

export default SimiliarProduct;
