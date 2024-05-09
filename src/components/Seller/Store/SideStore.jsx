import React from "react";
import Webbanner from "../../../assets/images/webbg.png";

const SideStore = () => {
  return (
    <div className="container py-8 px-10 mt-10 mx-auto bg-[#F2F2F2]">
      <div className="justify-between mx-auto flex">
        <h2 className="text-xl font-semibold">Image</h2>
        <h2 className="text-lg font-bold text-[#390E44] underline">Crop</h2>
      </div>
      <img
        src={Webbanner}
        alt="banner image"
        className=" object-cover object-center h-60 mt-2"
      />
      <p className=" font-semibold text-[#b0b0b0] mt-2">
        Image must be at least 5mb
      </p>
      <h2 className="text-xl text-[#390E44] py-5 font-bold">Choose Layout</h2>
      <div className="justify-between mx-auto flex pr-24">
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="type"
            id="fit"
            className="h-5 w-5 accent-primary"
          />
          <label htmlFor="fit" className="text-xl font-semibold">
            Fit
          </label>
        </div>
        <div className="flex items-center gap-1">
          <input
            type="radio"
            name="type"
            id="fill"
            className="h-5 w-5 accent-primary"
          />
          <label htmlFor="fill" className="text-xl font-semibold">
            Fill
          </label>
        </div>
      </div>
      <div className="py-6">
        <label htmlFor="radio1" className="text-xl font-semibold">
          Title
        </label>
        <br />
        <input
          type="text"
          className="border rounded-md my-2 border-3  py-2 w-full focus:border-[#390E44] "
        />{" "}
        <br />
        <label htmlFor="radio1" className="text-xl font-semibold">
          Description
        </label>
        <br />
        <input
          type="text"
          className="border rounded-md my-2 border-3 w-full  py-2 focus:border-[#390E44] "
        />
        <a className="justify-end flex font-bold text-[#989898] ">
          Add Description
        </a>
      </div>
      <div className="justify-between mx-auto flex">
        <p className=" font-bold">1 Product selected</p>
        <p className=" font-bold text-[#390E44]">Remove all</p>
      </div>
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg  md:flex-row md:max-w-xl "
      >
        <img src="ss.png" alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 font-bold tracking-tight text-[#390E44]">
            Men's winter Hoodies available in a all sizes
          </h5>
          <p className="mb-3">ASIN: B0CMMBSRZ5</p>
        </div>
      </a>
    </div>
  );
};

export default SideStore;
