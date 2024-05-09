import React from "react";
import TrackImage from "../../../assets/images/track-order.png";
import { TrackOrders } from "../../../constants/Order";
const Tracking = () => {
  return (
    <div>
      <div className="p-4 w-full h-full mx-auto">
        <img
          src={TrackImage}
          alt="Track image"
          loading="lazy"
          className=" -ml-4"
        />
        {TrackOrders.map((itm, indx) => (
          <div className="flex w-full gap-20 items-center" key={indx}>
            <div className="flex flex-1">
              <div className="mr-4 flex flex-col items-center">
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
                }  `}
              >
                <h2 className="mb-2 text-xl font-semibold text-gray">
                  {itm.date}
                </h2>
                <p className="text-gray  font-medium text-lg">{itm.desc}</p>
              </div>
            </div>
            <div className=" flex-1">
              <div className="ml-[70px]">
                <h3 className=" text-gray font-semibold text-lg">
                  {itm.place}
                </h3>
                <h5 className="text-darkgray font-semibold">({itm.time})</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tracking;
