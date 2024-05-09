import React from "react";
import { IoIosClose } from "react-icons/io";

const AddNewproductModal = ({ setOpen }) => {
  function closeModal() {
    setOpen(false);
    document.body.style.overflow = "auto";
  }
  return (
    <div className=" h-full w-full fixed top-0 left-0 flex justify-center items-center bg-black/50 px-5 sm:px-4">
      <div className=" max-w-4xl w-full bg-[#fff] py-4 px-7 rounded-2xl relative">
        <h3 className=" text-2xl font-semibold">Uploaded Images</h3>
        <div className="mt-4 flex flex-wrap gap-6">
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-[#C2C2C2] h-[145px] w-[145px]"></div>
          <div className="border border-dashed border-[#C2C2C2] h-[145px] w-[145px] flex justify-center items-center text-5xl text-darkgray cursor-pointer">+</div>
        </div>
        <h4 className="mt-5 text-[#FF0000] font-medium">
          image limit exceeded , you cannot use more than 8 images
        </h4>
        <span
          className=" text-4xl absolute top-1 right-2 cursor-pointer"
          onClick={closeModal}
        >
          <IoIosClose />
        </span>
      </div>
    </div>
  );
};

export default AddNewproductModal;
