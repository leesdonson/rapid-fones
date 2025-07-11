import { Outlet } from "react-router-dom";
import ProductNavbar from "./ProductNavbar";

const ProductLayout = () => {
  return (
    <div className="relative">
      <ProductNavbar />
      <div className="mt-5 p-1">
        <div className="h-24 md:h-28 sm:mb-0"></div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProductLayout;
