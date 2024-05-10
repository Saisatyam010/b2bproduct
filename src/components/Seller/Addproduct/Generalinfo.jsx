import React from "react";
import InputField from "./InputField";

const Generalinfo = () => {
  return (
    <div className="w-full h-full bg-white rounded-[14px] py-5 md:px-12 px-6">
      <h1 className="font-semibold text-2xl">General Information</h1>
      <InputField id="name" label="Product Name" placeholder="Product Name" />
      <InputField
        id="desc"
        label="Product Description"
        textarea
        resize="none"
        placeholder="Product Description"
      />
      <div className="flex justify-between w-full gap-4 shrink-0">
        <div className="flex max-w-[200px] items-center w-full">
          <div className="flex flex-col gap-3">
            <h3 className="text-[#626262] font-medium">Range</h3>
            <div className="flex max-w-[200px] items-center w-full">
              <input
                type="text"
                required
                placeholder="Start"
                className=" outline-none border border-[#D9D9D9] rounded-md w-full py-2 px-4 text-base"
              />
              <div className="h-[1px] w-[40px] bg-[#B9B9B9]"></div>
              <input
                type="text"
                required
                placeholder="End"
                className=" outline-none border border-[#D9D9D9] rounded-md w-full py-2 px-4 text-base"
              />
            </div>
          </div>
        </div>
        <InputField id="price" label="Price" placeholder="Price" />
      </div>
      <div className="w-full flex justify-end my-3">
        <button className="py-[2px] px-3 bg-primary font-semibold text-white rounded-md text-sm">
          + Add
        </button>
      </div>
      <div className="w-full flex gap-4">
        <InputField id="discount" label="Discount" placeholder="Discount" />
        <div className="relative">
          <InputField
            id="dtype"
            label="Discount Type"
            placeholder="Discount Type"
          />
          <div className="h-5 w-5 bg-primary rounded-full flex justify-center items-center absolute bottom-3 right-2 cursor-pointer">
            <span className="text-white rotate-90">&gt;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generalinfo;
