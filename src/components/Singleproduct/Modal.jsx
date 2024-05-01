import React from "react";
import { IoIosClose } from "react-icons/io";

const Modal = ({ setOpen }) => {
  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div className=" h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black/40 px-5 sm:px-4">
      <div className=" max-w-[546px] w-full bg-[#F9F9F9] p-5 rounded-2xl relative">
        <div className="max-w-[446px] w-full mx-auto">
          <h3 className=" text-2xl font-semibold">Send your enquiry</h3>
          <input
            type="number"
            required
            placeholder="Enter your Number"
            className="pl-4 py-[7px] w-full rounded-[4px] border-[#E6E6E6] border-2 mt-5 outline-none placeholder:text-[#858585] placeholder:textbase font-medium text-base"
          />
          <div className="flex gap-4">
            <div className="max-w-[72px] w-full mt-5 border-[#E6E6E6] border-2  rounded-[4px]">
              <img
                src="/images/product1.png"
                alt="product image"
                className="w-full"
              />
            </div>
            <textarea
              type="text"
              required
              placeholder="Type your message here....."
              className="pl-4 py-[7px] pr-2 w-full rounded-[4px] border-[#E6E6E6] border-2 mt-5 outline-none placeholder:text-[#858585] placeholder:text-base font-medium text-base"
            />
          </div>
          <button className="max-w-[134px] w-full bg-primary text-white py-[6px] rounded-3xl mt-5 hover:bg-white hover:text-primary transition-all ease-in duration-200 border border-primary">
            Submit
          </button>
        </div>
        <span
          className=" text-3xl absolute top-1 right-2 hover:text-purple transition-all ease-in duration-200 cursor-pointer"
          onClick={closeModal}
        >
          <IoIosClose />
        </span>
      </div>
    </div>
  );
};

export default Modal;
