import React, { useState } from "react";
import Image1 from "../../../assets/images/sellerAdd.png";
import AddNewproductModal from "../AddNewproductModal";

const ImageUpload = () => {
  const [imageModal, setImageModal] = useState(false);
  function openModal() {
    setImageModal(true);
    document.body.style.overflow = "hidden";
  }
  return (
    <div className="md:max-w-[38%] w-full h-full">
      <div className=" w-full bg-white rounded-[14px] py-5 px-8">
        <h1 className="text-2xl font-semibold">Upload Image</h1>
        <div className=" mt-4 aspect-[320/299] rounded-lg border-2 border-[#E2E2E2] max-w-full">
          <img
            src={Image1}
            alt="Product"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div className="flex gap-4 mt-6 w-full">
          <div className="w-1/4 h-[66px] border border-[#E3E3E3]"></div>
          <div className="w-1/4 h-[66px] border border-[#E3E3E3]"></div>
          <div className="w-1/4 h-[66px] border border-[#E3E3E3]"></div>
          <div
            className="w-1/4 h-[66px] cursor-pointer  border border-dashed border-[#E3E3E3] flex items-center justify-center text-darkgray text-3xl"
            onClick={openModal}
          >
            +
          </div>
        </div>
      </div>
      {imageModal && <AddNewproductModal setOpen={setImageModal} />}
    </div>
  );
};

export default ImageUpload;
