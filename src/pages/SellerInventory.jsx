import React from "react";
import InventoryFilter from "../components/Seller/Inventory/InventoryFilter";
import ProductTable from "../components/Seller/Inventory/ProductTable";
import SearchBar from "../components/Seller/Inventory/SearchBar";
import TotalProducts from "../components/Seller/Inventory/TotalProducts";

const SellerInventory = () => {
  return (
    <>
      <SearchBar />
      <InventoryFilter />
      <TotalProducts />
      <ProductTable />
    </>
  );
};

export default SellerInventory;
