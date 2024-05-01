import React from "react";
import { CorrectIcon } from "../Common/Icons";
import { TermConditionData } from "../Common/Data";

const TermCondition = () => {
  return (
    <div className=" w-full py-2 my-5">
      <h1 className=" text-[26px] font-semibold text-black">
        Term & condition
      </h1>
      <div className=" mt-8 w-full">
        {TermConditionData.map((item, index) => (
          <div className="flex items-start gap-3 mb-2" key={index}>
            <span>
              <CorrectIcon />
            </span>
            <h5 className=" text-[#555] text-lg">{item.content}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermCondition;
