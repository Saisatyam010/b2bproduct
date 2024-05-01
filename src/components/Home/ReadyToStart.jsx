import React from "react";

const ReadyToStart = () => {
  return (
    <div className="w-full bg-white pt-5 my-10 border-b-2">
      <div className=" container mx-auto flex lg:justify-between justify-center lg:flex-nowrap flex-wrap">
        <div className="">
          <h1 className="font-semibold text-[39px] text-purple">
            Ready to get started?
          </h1>
          <h3 className=" mt-3 text-purple text-[28px]">
            Explore millions of products from trusted <br /> suppliers by
            signing up today!
          </h3>
          <button className=" my-5 px-8 py-3 rounded-3xl bg-secondary text-black text-xl font-semibold">
            Signup
          </button>
        </div>
        <div className="lg:-mt-10 mt-0">
          <img src="/images/boyThumbsup.png" alt="boyThumbsup" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default ReadyToStart;
