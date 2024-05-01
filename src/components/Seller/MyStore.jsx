import React from "react";
import MyStorebg from "../../assets/sellerMystorebg.png";
const MyStore = () => {
  return (
    <div
      className="bg-center bg-no-repeat w-full h-screen bg-cover"
      style={{ backgroundImage: `url(${MyStorebg})` }}
    >
      <div className="container mx-auto py-4">
        <h1 className="md:text-5xl text-2xl font-medium uppercase mt-16">
          Create your <span className=" text-primary">store</span> now
        </h1>
        <h4 className="md:text-xl text-lg mt-4">
          Create and Customize Stores for your Brands.
        </h4>
        <h5 className="md:text-lg text-base mt-2 text-[#010088] cursor-pointer underline">
          Learn how to create store
        </h5>
        <button className=" mt-4 max-w-[250px] w-full bg-primary text-white hover:bg-white border border-primary hover:text-primary transition-all ease-in duration-200 py-4 rounded-[41px]">
          Create store now
        </button>
      </div>
    </div>
  );
};

export default MyStore;
