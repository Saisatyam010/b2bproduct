import React, { useEffect, useState } from "react";
import PreviewSelectionModal from "./PreviewSelectionModal";

const PricingCard = ({ screenSize }) => {
  const [openModal, setOpenModal] = useState(false);
  function opensModal() {
    setOpenModal(!openModal);
    document.body.style.overflow = "hidden";
  }

  function handleScroll() {
    const element = document.getElementById("product-info");
    if (window.scrollY > 1000) {
      element.classList.add("sticky");
    } else {
      element.classList.remove("sticky");
    }
  }

  useEffect(() => {
    if (screenSize) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [screenSize]);

  return (
    <div
      id="product-info"
      className="lg:max-w-[40%] w-full shadow-black/25 shadow-[0px_4px_20px_-5px]  top-5 "
    >
      <div className="w-full bg-secondary py-3 pl-5">
        <p className=" text-[20px] font-medium">
          #4 Most popular in Men’s Oem Service Hoodies{" "}
        </p>
      </div>
      <div className=" px-6 sm:px-5 py-3">
        <div className="max-w-[425px] w-full mx-auto mt-[80px] relative">
          <div className=" h-[6px] w-full bg-[#CCCBCB] rounded-[6px]"></div>
          <div className=" h-[49px] w-[49px] bg-[#CCCBCB] rounded-full absolute bottom-[-18px] left-20"></div>
        </div>
        <div className="flex items-center gap-2 mt-10">
          <h1 className=" text-4xl font-semibold">₹ 82,000</h1>
          <h4 className=" text-[20px]">(₹82/Piece)</h4>
        </div>
        <div className="mt-3 flex gap-2 items-center">
          <h4 className="text-[20px] font-medium text-[#2D2D2D]">
            Colors(18):
          </h4>
          <span className="text-[20px] font-semibold">White</span>
        </div>
        <div className="mt-4 py-2 flex gap-[15px]">
          <div className="h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          <div className="h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          <div className="h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          <div className="h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          <div className="h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          <div className="h-[56px] w-[56px] bg-[#D9D9D9]"></div>
          <div className="h-[56px] w-[56px] bg-[#EEE] flex justify-center items-center">
            <span className="text-[#606060]">+12</span>
          </div>
        </div>
        <div className="mt-3 flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <h4 className="text-[20px] font-medium text-[#2D2D2D]">
              Sizes(5):
            </h4>
            <span className="text-[20px] font-semibold">L</span>
          </div>
          <span className=" underline underline-offset-4">View size Chart</span>
        </div>
        <div className="mt-4 py-2 flex gap-[15px]">
          <div className="h-[56px] w-[56px] bg-[#EEE] flex justify-center items-center">
            <span className="text-black font-bold">XS</span>
          </div>
          <div className="h-[56px] w-[56px] bg-[#EEE] flex justify-center items-center">
            <span className="text-black font-bold">S</span>
          </div>
          <div className="h-[56px] w-[56px] bg-[#EEE] flex justify-center items-center">
            <span className="text-black font-bold">M</span>
          </div>
          <div className="h-[56px] w-[56px] bg-[#EEE] flex justify-center items-center">
            <span className="text-black font-bold">L</span>
          </div>
          <div className="h-[56px] w-[56px] bg-[#EEE] flex justify-center items-center">
            <span className="text-black font-bold">XL</span>
          </div>
        </div>
        <span
          onClick={opensModal}
          className="text-[##737373] mt-3 underline underline-offset-2 cursor-pointer"
        >
          Preview Selection
        </span>
        <p className=" mt-2 text-[20px] text-[##737373]">
          Every payment you make on Alibaba.com is secured with strict SSL
          encryption and PCI DSS data protection protocols
        </p>
        <div className="flex gap-5 my-5">
          <button className="max-w-[234px] w-full bg-white text-primary border border-primary rounded-3xl py-3 hover:bg-primary hover:text-white transition-all ease-in duration-200">
            Contact
          </button>
          <button className="max-w-[234px] w-full bg-primary text-white border border-primary hover:bg-white hover:text-primary transition-all ease-in duration-200 rounded-3xl py-3">
            Chat now
          </button>
        </div>
      </div>
      {openModal && <PreviewSelectionModal setOpen={setOpenModal} />}
    </div>
  );
};

export default PricingCard;
