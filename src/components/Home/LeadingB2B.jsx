import React from "react";
import { leadingCardData } from "../Common/Data";

const LeadingB2B = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-black font-semibold text-[40px] text-center mt-9 mb-20">
        The leading B2B ecommerce
      </h2>
      <div className="flex gap-4 w-[93%] mx-auto  mb-12 lg:flex-nowrap flex-wrap">
        {leadingCardData?.map((item, index) => (
          <div className={`bg-primary rounded-md ${index !==0 ? 'mt-14' : ''} lg:mt-0 py-6`} key={index}>
            <div className="flex justify-center lg:flex-col-reverse lg:items-center xl:flex-row">
              <div className="ms-[1.1rem] lg:px-2 lg:mx-0  w-full">
                <p className="text-white font-medium text-[22px]">
                  {item.content.slice(0, item.start)}{" "}
                  <span className="text-secondary ">
                    {item.content.slice(item.start, item.end)}
                  </span>{" "}
                  <span className="text-white">
                    {item.content.slice(item.end + 1)}
                  </span>
                </p>
              </div>
              <div className="max-w-[150px] w-full -mt-[100px]">
                <img src={item.image} className="w-full" alt="leading"></img>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadingB2B;
