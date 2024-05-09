import React from "react";
import TrackImage from "../../../assets/images/track-order.png";
import { TrackOrders } from "../../../constants/Order";
const Tracking = () => {
  return (
    <div className="p-4 w-full">
      <img
        src={TrackImage}
        alt="Track image"
        loading="lazy"
        className="-ml-4"
      />
      {TrackOrders.map((itm, indx) => (
        <div className="flex w-full md:gap-16 justify-between gap-10 items-center" key={indx}>
          <div className="flex max-w-[600px] w-full">
            <div className="flex flex-col items-center mr-4 ">
              <div className="h-full w-1 bg-[#D5D5D5]"></div>
              <div>
                <div className="h-10 w-10 rounded-full bg-greenColor"></div>
              </div>
              {indx + 1 === TrackOrders.length ? null : (
                <div className="h-full w-1 bg-[#D5D5D5]"></div>
              )}
            </div>
            <div
              className={`${
                indx + 1 === TrackOrders.length ? "" : "pb-8 mt-4"
              } `}
            >
              <h3 className="mb-2 md:text-xl text-lg font-semibold text-gray">
                {itm.date}
              </h3>
              <p className="text-gray font-medium md:text-lg text-base">{itm.desc}</p>
            </div>
          </div>
          <div className="max-w-[400px] w-full">
            <div className="md:ml-[70px] ml-0">
              <h3 className=" text-gray font-semibold md:text-lg text-sm md:text-start text-center">{itm.place}</h3>
              <h5 className="text-darkgray font-semibold md:text-lg text-sm md:text-start text-center">({itm.time})</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tracking;
