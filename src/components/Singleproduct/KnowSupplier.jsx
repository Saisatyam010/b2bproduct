import React from "react";

const KnowSupplier = () => {
  return (
    <div className=" mt-2 w-full pb-8 border-[#BCBCBC] border-b">
      <h1 className="text-[26px] font-semibold">Know your supplier </h1>
      <div className="mt-8 w-full bg-[#F0F0F0] rounded-[14px] shadow-black/25 shadow-[0px_2px_15px_0px] p-8">
        <div className="flex sm:justify-between just items-center flex-wrap gap-y-6">
          <div className="flex gap-6 items-center sm:justify-start justify-center flex-wrap">
            <div className=" h-[59px] w-[59px] bg-[#D9D9D9] rounded-[4px]"></div>
            <div className="">
              <h3 className="text-[20px] text-[#272727]">
                Sportwear co pvt ltd
              </h3>
              <span className="text-[#2E2E2E]">5 yrs</span>
            </div>
          </div>
          <h3 className=" font-semibold text-[#2E2E2E]">Dehradun</h3>
        </div>
        <div className=" mt-[26px] flex sm:justify-between justify-center w-full sm:flex-nowrap flex-wrap gap-y-4">
          <div className="max-w-[176px] w-full sm:border-r-2 border-r-0 border-[#8A8A8A] ">
            <h4 className="text-[#5E5E5E] text-center">Response Time</h4>
            <h3 className=" mt-2  text-[28px] font-semibold text-[#3E3E3E] text-center">
              {"<"}
              6h
            </h3>
          </div>
          <div className="max-w-[224px] w-full sm:border-r-2 border-r-0 border-[#8A8A8A] ">
            <h4 className="text-[#5E5E5E] text-center">
              On-time delivery rate{" "}
            </h4>
            <h3 className=" mt-2 text-[28px] font-semibold text-[#3E3E3E] text-center">
              82.2%
            </h3>
          </div>
          <div className="max-w-[176px] w-full">
            <h4 className="text-[#5E5E5E] text-center">31 Transactions </h4>
            <h3 className=" mt-2 text-[28px] font-semibold text-[#3E3E3E] text-center">
              20,678+
            </h3>
          </div>
        </div>
        <div className=" mt-7 flex flex-wrap-reverse justify-center sm:justify-start gap-[23px]">
          <button className="max-w-[184px] w-full bg-white border-2 py-2 rounded-[29px] border-primary text-primary font-semibold text-[18px] hover:bg-primary hover:text-white transition-all ease-in duration-200">
            View Profile
          </button>
          <button className="max-w-[211px] w-full bg-primary border-2 py-2 rounded-[29px] border-primary text-white font-semibold text-[18px] hover:bg-white hover:text-primary transition-all ease-in duration-200">
            View Product
          </button>
        </div>
      </div>
    </div>
  );
};

export default KnowSupplier;
