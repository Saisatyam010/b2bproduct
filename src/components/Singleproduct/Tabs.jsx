import moment from "moment/moment";
import React from "react";
import Star from "../Common/Star";

const Tabs = ({ data }) => {
  return (
    <div className="mt-8 w-full border-2 rounded-[14px] border-[#DDDDDD] px-5 py-7 ">
      <div className="flex items-center justify-between flex-wrap gap-y-3">
        <div className="flex gap-3 items-center shrink-0">
          <div className=" h-[62px] w-[62px] bg-[#D9D9D9] rounded-full"></div>
          <div className="">
            <h3 className="text-[20px]">{data?.name}</h3>
            <h5 className="text-[#858585]">
              {moment(data?.date).format("DD-MMMM-YY")}
            </h5>
          </div>
        </div>
        <Star starsCount={data?.rating} />
      </div>
      <p className=" mt-2 text-[#727272] font-medium">{data?.review}</p>
      <div className=" mt-5 flex gap-[21px] ml-2 flex-wrap sm:justify-start justify-center shrink-0">
        <div className="h-[100px] w-[100px] bg-[#D9D9D9]"></div>
        <div className="h-[100px] w-[100px] bg-[#D9D9D9]"></div>
        <div className="h-[100px] w-[100px] bg-[#D9D9D9]"></div>
      </div>
    </div>
  );
};

export default Tabs;
