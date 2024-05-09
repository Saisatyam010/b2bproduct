import React from "react";
import SearchBar from "../components/Seller/Inventory/SearchBar";
import InventoryFilter from "../components/Seller/Inventory/InventoryFilter";
import TotalProducts from "../components/Seller/Inventory/TotalProducts";
import ProductTable from "../components/Seller/Inventory/ProductTable";

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
