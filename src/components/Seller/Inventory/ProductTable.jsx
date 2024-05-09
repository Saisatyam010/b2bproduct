import React from "react";
import { FaAngleDown } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { SellerInventoryTableHead } from "../../Common/Data";

const ProductTable = () => {
  const { products } = useSelector((state) => state.inventory);
  return (
    <div className="container mx-auto py-1 mb-10 overflow-auto">
      <table className="border-[#DBDBDB] border-2 w-full">
        <tr className="bg-[#F4F4F4] border-[#DBDBDB] border-b-2">
          {SellerInventoryTableHead.map((itm, indx) => (
            <th
              className=" font-medium p-4 text-start whitespace-nowrap"
              key={indx}
            >
              {itm.heading === "Save all" ? (
                <button className="text-[#727272] bg-[#FFFAE0] border border-[#EBCD75] w-[139px] py-2 rounded-[4px]">
                  {itm.heading}
                </button>
              ) : (
                itm.heading
              )}
            </th>
          ))}
        </tr>
        {products.map((itm, indx) => (
          <tr className={`border-[#DBDBDB] border-b-2`} key={indx}>
            <td className="p-4 text-[#505050] text-sm">{itm.status}</td>
            <td className="p-4 text-[#505050] text-sm">
              <img src={itm.img} alt="Inventory img" />
            </td>
            <td className="p-4 text-[#505050] text-sm">{itm.SKU}</td>
            <td className="p-4 text-[#505050] text-sm text-start">
              {itm.productName}
            </td>
            <td className="p-4 text-[#505050] text-sm">
              {itm.dateCreated} <br /> {itm.time}
            </td>
            <td className="p-4 text-[#505050] text-sm">
              <button className=" py-1 px-4 mx-auto bg-[#EAEAEA]">
                {itm.stock}
              </button>
            </td>
            <td className="p-4 text-[#505050] text-sm">
              <div className="flex flex-col gap-3">
                <div className="flex w-full items-center justify-center">
                  <input
                    type="text"
                    value={0}
                    className="border-[#B6B6B6] border bg-[#F5F5F5] outline-none py-2 rounded-[2px] text-center px-1 w-11"
                  />
                  <div className="h-[2px] w-[18px] bg-[#B9B9B9]"></div>
                  <input
                    type="text"
                    value={120}
                    className="border-[#B6B6B6] border bg-[#F5F5F5] outline-none py-2 rounded-[2px] px-1 w-11 text-center"
                  />
                </div>
                <div className="w-full relative">
                  <input
                    type="text"
                    value={45.46}
                    className="border-[#B6B6B6] border bg-white outline-none py-2 rounded-[2px] px-3 w-full text-end"
                  />

                  <span className="text-gray absolute left-3 top-1/2 -translate-y-1/2">
                    $
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="underline text-primary underline-offset-2 flex items-center cursor-pointer">
                    View More
                    <FaAngleDown />
                  </span>
                  <span className="text-[#717171]">per unit</span>
                </div>
              </div>
            </td>
            <td className="p-4 text-[#505050] text-sm">
              <div className="bg-white rounded-[4px] border-[#B6B6B6] border w-full py-2 pl-6 cursor-pointer">
                Edit
              </div>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ProductTable;
