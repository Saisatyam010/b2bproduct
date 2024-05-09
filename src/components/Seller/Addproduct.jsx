import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MainLayout from "../Common/MainLayout";
import AddproductHeader from "./Addproduct/AddproductHeader";
import ProductTabs from "./Addproduct/ProductTabs";
const Addproduct = () => {
  const navigate = useNavigate();
  const { Category } = useSelector((state) => state.category);
  useEffect(() => {
    if (Category === null) {
      navigate("/seller/product/selectcategory");
    }
  }, []);

  return (
    <MainLayout>
      <AddproductHeader />
      <ProductTabs />
    </MainLayout>
  );
};

export default Addproduct;
