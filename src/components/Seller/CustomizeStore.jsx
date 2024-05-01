import React from "react";
import StoreImage from "../../assets/images/customizeStore.png";
const CustomizeStore = () => {
  return (
    <div className="container mx-auto w-full py-4">
      <h1 className="md:text-3xl text-xl text-center font-medium py-1">
        Create and customise Stores for your brands.
      </h1>
      <div className="border-2 border-[#DEDEDE] border-dashed p-4 mt-6 w-full">
        <img
          src={StoreImage}
          alt="Store image"
          loading="lazy"
          className="w-full h-auto"
        />
      </div>
      <h2 className="text-center mt-4 text-primary font-semibold text-3xl">
        Brand Name
      </h2>
      <h4 className="mt-2 text-lg text-center font-medium">
        <span className="text-[#606060]">Category : </span>Clothing
      </h4>
      <p className="text-[#5073C7] underline font-medium text-xl cursor-pointer mt-3">
        https://Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua
      </p>
      <div className=" max-w-[420px] w-full mx-auto my-4 flex justify-between">
        <button className="max-w-[200px] w-full bg-white text-primary py-3 border border-primary hover:bg-primary hover:text-white transition-all ease-in duration-200 rounded-[26px]">
          See Insight
        </button>
        <button className="max-w-[200px] w-full bg-primary text-white py-3 border border-primary hover:bg-white hover:text-primary transition-all ease-in duration-200 rounded-[26px]">
          Edit Store
        </button>
      </div>
    </div>
  );
};

export default CustomizeStore;
