import React from "react";
import { Outlet } from "react-router-dom";
import ProductNavbar from "./ProductNavbar";

const ProductLayout = () => {
  return (
    <div>
      <ProductNavbar />
      <Outlet />
    </div>
  );
};

export default ProductLayout;
