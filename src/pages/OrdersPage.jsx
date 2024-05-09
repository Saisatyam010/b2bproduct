import React from "react";
import Tabs from "../components/Seller/Order/Tabs";
import Orders from "../components/Seller/Order/Orders";

const OrdersPage = () => {
  return (
    <div className="w-full h-full overflow-auto bg-[#F4F4F4]">
      <Tabs />
      <Orders />
    </div>
  );
};

export default OrdersPage;
