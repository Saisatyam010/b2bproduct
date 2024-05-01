import React from "react";
import { KeyAttributesData } from "../Common/Data";

const KeyAttributes = () => {
  return (
    <div className="w-full mt-5 py-4">
      <h3 className="text-[26px] leading-9 font-semibold">Key Attributes</h3>
      <div className=" mt-5 py-4">
        {KeyAttributesData.map((itm, indx) => (
          <div className="flex mb-1" key={indx}>
            <div className=" max-w-[355px] w-full bg-[#EEE] py-[17px] pl-10 pr-3">
              <h4 className="text-xl font-medium text-black">{itm.box1}</h4>
            </div>
            <div className=" max-w-[385px] w-full bg-white border-2 border-[#EEE] py-[17px] pl-10 pr-3">
              <h4 className="text-xl text-[#525252] font-medium">{itm.box2}</h4>
            </div>
          </div>
        ))}
        <div className="flex justify-end my-4">
          <h3 className=" underline underline-offset-4 text-lg text-[#525252] font-medium cursor-pointer">
            Show More
          </h3>
        </div>
      </div>
    </div>
  );
};

export default KeyAttributes;
