import React from "react";
import Tabs from "../components/Seller/Order/Tabs";
import Orders from "../components/Seller/Order/Orders";
import MainLayout from "../components/Common/MainLayout";

const OrdersPage = () => {
  return (
    <MainLayout>
      <Tabs />
      <Orders />
    </MainLayout>
  );
};

export default OrdersPage;
