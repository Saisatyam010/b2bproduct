import React from "react";
import { IoIosClose } from "react-icons/io";

const PreviewSelectionModal = ({ setOpen }) => {
  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div className=" h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black/40 px-5 sm:px-4 z-[100]">
      <div className=" max-w-[643px] w-full bg-white rounded-t-xl relative pt-8">
        <div className="w-full px-8">
          <h3 className=" text-2xl font-semibold">Colors(10): Black</h3>
          <div className=" my-3 py-2 flex flex-wrap flex-1 gap-6">
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
            <div className=" h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          </div>
        </div>
        <div className=" px-8 w-full">
          <h3 className=" text-2xl font-semibold">Sizes(2):</h3>
        </div>
        <div className="w-full py-2 my-3">
          <div className="px-8 flex justify-between flex-1">
            <h3 className="font-bold text-[20px]">XL</h3>
            <h3 className="font-semibold text-[#4A4A4A] text-[20px]">$21</h3>
            <div className="flex items-center border-[#B9B9B9] border-t-2 border-b-2 rounded-full">
              <button
                type="button"
                className="size-10 rounded-full leading-10 text-black border-[#B9B9B9] transition hover:opacity-75 border-2"
              >
                -
              </button>
              <input
                type="text"
                value="1"
                className="h-10 w-10 outline-none font-bold text-center sm:text-sm"
              />

              <button
                type="button"
                className="size-10 leading-10 text-black transition hover:opacity-75 border-[#B9B9B9] rounded-full border-2"
              >
                +
              </button>
            </div>
          </div>
          <div className=" max-w-[95%] border-b-2 my-2 mx-auto"></div>
          <div className="px-8 flex justify-between">
            <h3 className="font-bold text-[20px]">XXL</h3>
            <h3 className="font-semibold text-[#4A4A4A] text-[20px]">$21</h3>
            <div className="flex items-center border-[#B9B9B9] border-t-2 border-b-2 rounded-full">
              <button
                type="button"
                className="size-10 rounded-full leading-10 text-black border-[#B9B9B9] transition hover:opacity-75 border-2"
              >
                -
              </button>
              <input
                type="text"
                value="1"
                className="h-10 w-10 outline-none font-bold text-center sm:text-sm"
              />

              <button
                type="button"
                className="size-10 leading-10 text-black transition hover:opacity-75 border-[#B9B9B9] rounded-full border-2"
              >
                +
              </button>
            </div>
          </div>
          <div className=" max-w-[95%] border-b-2 my-2 mx-auto"></div>
        </div>
        <span
          className=" text-4xl absolute top-1 right-2 hover:text-purple transition-all ease-in duration-200 cursor-pointer hover:rotate-90"
          onClick={closeModal}
        >
          <IoIosClose />
        </span>
        <div className="w-full shadow-black/25 shadow-[0px_4px_20px_-5px] px-5 py-5">
          <div className="flex justify-between">
            <h4 className="text-[#555555] underline underline-offset-4">
              Item subtotal (3 variations 15 items)
            </h4>
            <h4 className="text-[#555555]">$74.70</h4>
          </div>
          <div className="flex justify-between mt-2">
            <h4 className="text-[#555555]">Shipping total</h4>
            <h4 className="text-[#555555]">$274.64</h4>
          </div>
          <div className="w-full border-b-2 my-2 mx-auto"></div>
          <div className="flex justify-between mt-2">
            <h4 className=" font-semibold">Subtotal</h4>
            <h4 className="font-bold">$349.34 ($23.29/set)</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewSelectionModal;
