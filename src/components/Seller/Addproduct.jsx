import React, { useState } from "react";
import Image1 from "../../assets/images/sellerAdd.png";
import AddNewproductModal from "./AddNewproductModal";
const Addproduct = () => {
  const [imageModal, setimageModal] = useState(false);
  function openModal() {
    setimageModal(true);
    document.body.style.overflow = "hidden";
  }
  return (
    <div className="w-full h-full bg-[#EFEFEF] pb-5">
      <div className="container mx-auto py-5">
        <div className="flex md:justify-between justify-center items-center shrink flex-wrap gap-y-6 mb-3">
          <div className="flex md:justify-start justify-center items-center gap-2 flex-1 shrink-0">
            <svg
              width="26"
              height="26"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.125 22.5146V13.7109L3.75 9.02344V21.9141L11.7188 25.9131L11.2646 27.7734L1.875 23.0859V6.91406L14.0625 0.834961L26.25 6.91406V10.8691C25.5664 10.9766 24.9414 11.1963 24.375 11.5283V9.02344L15 13.7109V20.6396L13.125 22.5146ZM11.0449 4.42383L19.5996 9.31641L23.2178 7.5L14.0625 2.91504L11.0449 4.42383ZM14.0625 12.085L17.5781 10.3271L9.02344 5.43457L4.90723 7.5L14.0625 12.085ZM27.0703 13.125C27.4805 13.125 27.8613 13.1982 28.2129 13.3447C28.5645 13.4912 28.877 13.6914 29.1504 13.9453C29.4238 14.1992 29.6289 14.5068 29.7656 14.8682C29.9023 15.2295 29.9805 15.6152 30 16.0254C30 16.4062 29.9268 16.7773 29.7803 17.1387C29.6338 17.5 29.4238 17.8174 29.1504 18.0908L18.6475 28.5938L13.125 29.9707L14.502 24.4482L25.0049 13.96C25.2881 13.6768 25.6055 13.4668 25.957 13.3301C26.3086 13.1934 26.6797 13.125 27.0703 13.125ZM27.8174 16.7725C28.0225 16.5674 28.125 16.3184 28.125 16.0254C28.125 15.7227 28.0273 15.4785 27.832 15.293C27.6367 15.1074 27.3828 15.0098 27.0703 15C26.9336 15 26.8018 15.0195 26.6748 15.0586C26.5479 15.0977 26.4355 15.1709 26.3379 15.2783L16.2012 25.415L15.7031 27.3926L17.6807 26.8945L27.8174 16.7725Z"
                fill="black"
              />
            </svg>
            <h1 className=" text-3xl font-semibold whitespace-nowrap">Add New Product</h1>
          </div>
          <div className="flex md:justify-start justify-center gap-3">
            <button className="flex items-center gap-1 w-1/2 whitespace-nowrap px-4 py-3 rounded-[26px] bg-white border-black border">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5859 7.15484C16.5464 7.06439 16.4911 6.98171 16.4225 6.91067L11.4225 1.91067C11.3515 1.84216 11.2688 1.78685 11.1784 1.74734C11.1534 1.73567 11.1267 1.729 11.1 1.71984C11.0303 1.69611 10.9577 1.68182 10.8842 1.67734C10.8667 1.67567 10.8509 1.6665 10.8334 1.6665H5.00004C4.08087 1.6665 3.33337 2.414 3.33337 3.33317V16.6665C3.33337 17.5857 4.08087 18.3332 5.00004 18.3332H15C15.9192 18.3332 16.6667 17.5857 16.6667 16.6665V7.49984C16.6667 7.48234 16.6575 7.4665 16.6559 7.44817C16.6518 7.3746 16.6375 7.30196 16.6134 7.23234C16.605 7.20567 16.5975 7.17984 16.5859 7.15484ZM13.8217 6.6665H11.6667V4.5115L13.8217 6.6665ZM5.00004 16.6665V3.33317H10V7.49984C10 7.72085 10.0878 7.93281 10.2441 8.08909C10.4004 8.24537 10.6124 8.33317 10.8334 8.33317H15L15.0017 16.6665H5.00004Z"
                  fill="black"
                />
                <path
                  d="M6.66663 9.99984H13.3333V11.6665H6.66663V9.99984ZM6.66663 13.3332H13.3333V14.9998H6.66663V13.3332ZM6.66663 6.6665H8.33329V8.33317H6.66663V6.6665Z"
                  fill="black"
                />
              </svg>
              Save Draft
            </button>
            <button className=" w-1/2 bg-primary whitespace-nowrap px-4 py-3 rounded-[26px] text-white">
              Add Product
            </button>
          </div>
        </div>
        <div className="flex md:justify-between justify-center items-center flex-wrap shrink lg:ml-10 ml-0 lg:mt-0 mt-8 gap-y-4">
          <div className="w-[450px] flex whitespace-nowrap">
            <div className="w-1/2 border-b-2 border-primary cursor-pointer">
              <h3 className=" font-medium text-center text-primary text-lg">
                Main Information
              </h3>
            </div>
            <div className="w-1/2 border-b-2 border-gray cursor-pointer">
              <h3 className=" font-medium text-center text-gray text-lg">
                Specification
              </h3>
            </div>
          </div>
          <div>
            <h4 className="text-darkgray text-lg">
              Clothing &gt; <span>Men &gt;</span> Upper winter wear
            </h4>
          </div>
        </div>
        <div className="flex gap-6 mt-4 w-full flex-wrap lg:flex-nowrap items-start shrink-0">
          <div className="w-full bg-white rounded-[14px] py-5 md:px-12 px-6">
            <h1 className=" font-semibold text-2xl">General Information</h1>
            <div className="mt-5 flex flex-col gap-3">
              <label htmlFor="name" className="text-[#626262] font-medium">
                Product Name
              </label>
              <input
                type="text"
                required
                id="name"
                className=" outline-none border border-[#D9D9D9] rounded-md w-full py-2 px-4 text-base"
              />
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <label htmlFor="desc" className="text-[#626262] font-medium">
                Product Description
              </label>
              <textarea
                name=""
                required
                style={{ resize: "none" }}
                id="desc"
                cols="2"
                rows="5"
                className="outline-none border border-[#D9D9D9] px-4 py-2 rounded-md"
              ></textarea>
            </div>
            {/* <div className=" mt-5 flex justify-between w-full pb-5">
                <div className="flex flex-col">
                  <h3 className=" font-semibold">Size</h3>
                  <h4 className=" text-[#9C9C9C] text-sm">
                    Pick Available Size
                  </h4>
                  <div className="flex gap-3 mt-3">
                    {SellerSizes.map((itm, indx) => (
                      <div
                        className={` w-10 h-10 rounded-[4px] flex justify-center items-center cursor-pointer font-semibold text-sm ${
                          indx === 0 || indx === 1
                            ? "bg-primary text-white"
                            : "bg-[#F2F2F2] text-[#606060]"
                        }`}
                        key={indx}
                        onClick={() => Sizes.push(itm)}
                      >
                        <span className="">{itm}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className=" font-semibold">Gender</h3>
                  <h4 className=" text-[#9C9C9C] text-sm">
                    Pick Available Gender{" "}
                  </h4>
                  <div className="flex gap-3">
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={"Male"}
                        id="men"
                        className=" accent-primary h-4 w-4"
                      />
                      <label
                        htmlFor="men"
                        className="text-[#9C9C9C] font-medium"
                      >
                        Men
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={"Male"}
                        id="women"
                        className=" accent-primary h-4 w-4"
                      />
                      <label
                        htmlFor="women"
                        className="text-[#9C9C9C] font-medium"
                      >
                        Women
                      </label>
                    </div>
                    <div className="flex gap-2 items-center">
                      <input
                        type="radio"
                        name="gender"
                        value={"Male"}
                        id="unisex"
                        className=" accent-primary  h-4 w-4"
                      />
                      <label
                        htmlFor="unisex"
                        className="text-[#9C9C9C] font-medium"
                      >
                        Unisex
                      </label>
                    </div>
                  </div>
                </div>
              </div> */}
            <div className="w-full bg-white rounded-[14px] py-5 mt-3">
              <div className="flex justify-between w-full shrink-0">
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
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#626262] font-medium">Price</h3>
                  <div className="max-w-[200px] w-full">
                    <input
                      type="text"
                      required
                      placeholder="Price"
                      className=" outline-none border border-[#D9D9D9] rounded-md w-full py-2 px-4 text-base"
                    />
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-end mt-3">
                <button className="py-[2px] px-3 bg-primary font-semibold text-white rounded-md text-sm">
                  + Add
                </button>
              </div>
              <div className="mt-4 w-full flex gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="discount"
                    className="text-gray font-medium mb-2"
                  >
                    Discount
                  </label>
                  <input
                    type="text"
                    id="discount"
                    className="outline-none border border-[#D9D9D9] w-full px-4 py-2 rounded-md"
                  />
                </div>
                <div className="w-1/2 relative">
                  <label htmlFor="dtype" className="text-gray font-medium mb-2">
                    Discount Type
                  </label>
                  <input
                    type="text"
                    id="dtype"
                    className="outline-none border border-[#D9D9D9] w-full px-4 py-2 rounded-md"
                  />
                  <div className="h-5 w-5 bg-primary rounded-full flex justify-center  items-center absolute bottom-3 right-2 cursor-pointer">
                    <span className=" text-white rotate-90">&gt;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:max-w-[38%] w-full">
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
          </div>
        </div>
      </div>
      {imageModal && <AddNewproductModal setOpen={setimageModal} />}
    </div>
  );
};

export default Addproduct;
