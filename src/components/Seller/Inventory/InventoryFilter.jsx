import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import {
  filterActive,
  filterAll,
  filterInactive,
} from "../../../features/inventory/inventorySlice";
import InputField from "./InputField";

const InventoryFilter = () => {
  const dispatch = useDispatch();

  function handleCheck(event) {
    const { value, checked } = event.target;
    if (checked) {
      if (value === "active") {
        dispatch(filterActive());
      } else if (value === "inactive") {
        dispatch(filterInactive());
      } else if (value === "all") {
        dispatch(filterAll());
      }
    }
  }
  return (
    <div className="w-full bg-[#F3F3F3] py-3">
      <div className="container mx-auto flex justify-between items-center flex-wrap">
        <div className="flex gap-4 flex-wrap">
          <h4 className="text-[#6C6C6C] font-medium ">Listing Status:</h4>
          <InputField
            handleCheck={handleCheck}
            label={"All"}
            value={"all"}
            defaultChecked
          />
          <InputField
            handleCheck={handleCheck}
            label={"Inactive"}
            value={"inactive"}
          />
          <InputField
            handleCheck={handleCheck}
            label={"Active"}
            value={"active"}
          />
          <InputField
            handleCheck={handleCheck}
            label={"Draft-listing"}
            value={"draft"}
          />
        </div>
        <div className="flex gap-4 flex-wrap">
          <input
            type="text"
            placeholder="Stock"
            className="bg-white px-1 py-2 border placeholder:text-[#808080] border-[#B2B2B2]  placeholder:text-base rounded-[4px] outline-none w-[66px] text-center text-sm"
          />
          <button className="bg-white flex gap-2 items-center px-4 py-2 border border-[#B2B2B2] text-[#808080] text-base rounded-[4px]">
            Additional Filter
            <FaAngleDown />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryFilter;
