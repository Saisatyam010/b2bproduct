import React from "react";
import OrderImage from "../../../assets/images/orderimg.png";
import { CancelledOrders } from "../../../constants/Order";
const Orders = () => {
  return (
    <div className="container mx-auto py-2 my-10 w-full">
      <div className="flex flex-col gap-10">
        {CancelledOrders.map((itm, indx) => (
          <div className=" bg-white rounded-lg pt-6 pb-8 px-7" key={indx}>
            <div className="flex sm:justify-between justify-center gap-y-3 w-full flex-wrap-reverse">
              <div className="flex gap-x-16">
                <div>
                  <h3 className=" text-darkgray">Order Placed</h3>
                  <h4 className="text-darkgray">{itm.date}</h4>
                </div>
                <div>
                  <h3 className=" text-darkgray">Total</h3>
                  <h4 className="text-darkgray">{itm.price}</h4>
                </div>
              </div>
              <div className="">
                <div>
                  <h3 className=" text-darkgray">Order {itm.orderId}</h3>
                </div>
                <h5 className="text-primary underline underline-offset-2 cursor-pointer text-end">
                  Invoice
                </h5>
              </div>
            </div>
            <div className="bg-[#CCCCCC] w-full h-[1px] mt-4"></div>
            <div className=" mt-6 w-full">
              <div className="flex gap-5 flex-wrap justify-center lg:justify-start items-end">
                <img src={OrderImage} alt="Order image" loading="lazy" />
                <div className="max-w-[668px] lg:mx-0 mx-auto w-full">
                  <h1 className="text-xl font-medium">{itm.productName} </h1>
                  <p className=" text-gray font-medium mt-2">
                    {itm.productDesc}{" "}
                  </p>
                  <div className="mt-4 flex gap-4 w-full">
                    <button className=" bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all ease-in duration-200 max-w-[147px] w-full py-2 font-medium rounded-[4px]">
                      View item
                    </button>
                    <button className="bg-primary border-2 border-primary text-white hover:bg-white hover:text-primary transition-all ease-in duration-200 max-w-[147px] w-full py-2 font-medium rounded-[4px]">
                      Buy it Again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
