import React from "react";
import Tracking from "../components/Seller/Track/Tracking";

const OrderTrack = () => {
  return (
    <div className="w-full bg-[#F4F4F4]">
      <div className="container mx-auto py-3 my-2">
        <h1 className=" font-semibold text-3xl ml-4 my-2">Shipping Track</h1>
        <div className=" bg-white w-full h-full mt-3 p-10 mb-10">
          <div className="flex justify-between w-full items-start">
            <div>
              <h2 className=" font-semibold text-2xl text-primary">
                Out for Delivery
              </h2>
              <h4 className=" text-lg font-medium">
                Expected delivery:{" "}
                <span className=" text-[#449444]">
                  Monday, 2 June, 2024, by 8:00pm
                </span>
              </h4>
            </div>
            <div>
              <h4 className=" text-lg font-medium">
                Your package is out for delivery and will arrive today.
              </h4>
              <h3 className=" font-medium text-[#9A9A9A]">
                (Updated 0 minute ago)
              </h3>
            </div>
          </div>
          <Tracking />
        </div>
      </div>
    </div>
  );
};

export default OrderTrack;
