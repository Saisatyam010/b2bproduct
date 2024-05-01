import React from "react";
import { NoFilStarIcon, StarIcon } from "../Common/Icons";

const Sidebar = () => {
  return (
    <div className="container mx-auto py-8 my-6">
      <div className="max-w-[310px] w-full bg-[#F9F9F9] border border-[#D4D4D4] rounded-[14px]">
        <div className="max-w-[80%] mx-auto w-full pt-7 pb-10 mb-8">
          <h1 className="text-[30px] font-bold">Filter</h1>
          <div className="flex flex-col gap-8 mt-4">
            <div className="">
              <h3 className="text-[20px] font-semibold">Price</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 mt-2">
                  <input
                    type="text"
                    placeholder="Min"
                    className=" p-2 placeholder:text-sm placeholder:font-medium placeholder:text-center outline-none border-2 border-[#B9B9B9] w-[60px] rounded-md text-sm"
                  />
                  <div className="h-[2px] w-[18px] bg-[#B9B9B9]"></div>
                  <input
                    type="text"
                    placeholder="Max"
                    className=" p-2 placeholder:text-sm placeholder:font-medium placeholder:text-center outline-none border-2 border-[#B9B9B9] w-[60px] rounded-md text-sm"
                  />
                </div>
                <button className="max-w-[77px] w-full bg-primary text-white py-2 rounded-[18px]">
                  OK
                </button>
              </div>
            </div>
            <div className="">
              <h3 className="text-[20px] font-semibold">Min Order</h3>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-1 mt-2">
                  <input
                    type="text"
                    placeholder="Enter min order"
                    className=" p-2 placeholder:text-sm placeholder:font-medium placeholder:text-center outline-none border-2 border-[#B9B9B9] max-w-[145px] w-full rounded-md text-sm"
                  />
                </div>
                <button className="max-w-[77px] w-full bg-primary text-white py-2 rounded-[18px]">
                  OK
                </button>
              </div>
            </div>
            <div className="">
              <h3 className="text-[20px] font-semibold">Business Type</h3>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-3 mt-3">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Manufacturer"
                      className="h-4 w-4 accent-primary"
                    />
                    <label
                      htmlFor="Manufacturer"
                      className=" font-medium text-[#575757]"
                    >
                      Manufacturer
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Exporter"
                      className="h-4 w-4 accent-primary"
                    />
                    <label
                      htmlFor="Exporter"
                      className=" font-medium text-[#575757]"
                    >
                      Exporter
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="Wholesaler"
                      className="h-4 w-4 accent-primary"
                    />
                    <label
                      htmlFor="Wholesaler"
                      className=" font-medium text-[#575757]"
                    >
                      Wholesaler
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h3 className="text-[20px] font-semibold">Ratings</h3>
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-5 mt-4">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="five"
                      className="h-4 w-4 accent-primary"
                    />
                    <label
                      htmlFor="five"
                      className="flex gap-1 text-[#6B6B6B] font-semibold"
                    >
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      (5.0)
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="four"
                      className="h-4 w-4 accent-primary"
                    />
                    <label
                      htmlFor="four"
                      className="flex gap-1 text-[#6B6B6B] font-semibold"
                    >
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <NoFilStarIcon />
                      </span>
                      (4.0)
                    </label>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="three"
                      className="h-4 w-4 accent-primary"
                    />
                    <label
                      htmlFor="three"
                      className="flex gap-1 text-[#6B6B6B] font-semibold"
                    >
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <StarIcon />
                      </span>
                      <span>
                        <NoFilStarIcon />
                      </span>
                      <span>
                        <NoFilStarIcon />
                      </span>
                      (3.0)
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
