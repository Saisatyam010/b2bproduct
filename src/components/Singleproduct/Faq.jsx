import React from "react";

const Faq = () => {
  return (
    <div className="max-w-full mt-4 pt-2 pb-8 border-[#BCBCBC] border-b">
      <h1 className="text-[26px] font-semibold">FAQ</h1>
      <h3 className="mt-3 text-[22px] font-semibold">Who are we?</h3>
      <p className="mt-[2px] text-[#555] text-[18px]">
        We are based in Guangdong, China, start from 2019,sell to North
        America 40.00% ,Oceania30.00%,Northern Europe15.00%,Western
        Europe15.00%. There are total about 11-50 people in our office.
      </p>
      <h3 className="mt-3 text-[22px] font-semibold">
        How can we guarantee quality?
      </h3>
      <p className="mt-[2px] text-[#555] text-[18px]">
        Always a pre-production sample before mass production; Always final
        Inspection before shipment
      </p>
      <div className=" mt-8 flex justify-end">
        <button className="text-[#555] font-medium text-[18px] underline underline-offset-4 decotaion-[#525252]">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Faq;
