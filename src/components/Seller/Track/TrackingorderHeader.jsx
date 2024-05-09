import React from "react";
import Tracking from "./Tracking";

const TrackingorderHeader = () => {
  return (
    <>
      <h1 className=" font-semibold text-3xl ml-4 my-2 py-3">Shipping Track</h1>
      <div className=" bg-white w-full mt-3 md:p-10 p-6 mb-10">
        <div className="flex justify-between w-full gap-4 flex-wrap items-center">
          <div>
            <h2 className=" font-semibold md:text-2xl text-xl text-primary">
              Out for Delivery
            </h2>
            <h4 className=" md:text-lg text-base font-medium">
              Expected delivery:{" "}
              <span className=" text-[#449444] md:text-base text-sm">
                Monday, 2 June, 2024, by 8:00pm
              </span>
            </h4>
          </div>
          <div>
            <h4 className=" md:text-lg text-sm font-medium">
              Your package is out for delivery and will arrive today.
            </h4>
            <h3 className="md:text-base text-sm font-medium text-[#9A9A9A]">
              (Updated 0 minute ago)
            </h3>
          </div>
        </div>
        <Tracking />
      </div>
    </>
  );
};

export default TrackingorderHeader;
