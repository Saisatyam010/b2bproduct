import React from "react";
import { AddProduct, SaveDraft } from "../../Common/Icons";

const AddproductHeader = () => {
  return (
    <div className="flex md:justify-between justify-center items-center shrink flex-wrap gap-y-6 mb-3">
      <div className="flex md:justify-start justify-center items-center gap-2 flex-1 shrink-0">
        <AddProduct />
        <h1 className=" text-3xl font-semibold whitespace-nowrap">
          Add New Product
        </h1>
      </div>
      <div className="flex md:justify-start justify-center gap-3">
        <button className="flex items-center gap-1 w-1/2 whitespace-nowrap px-4 py-3 rounded-[26px] bg-white border-black border">
          <SaveDraft />
          Save Draft
        </button>
        <button className=" w-1/2 bg-primary whitespace-nowrap px-4 py-3 rounded-[26px] text-white">
          Add Product
        </button>
      </div>
    </div>
  );
};

export default AddproductHeader;
