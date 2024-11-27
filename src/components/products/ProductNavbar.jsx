import React from "react";
import { Link } from "react-router-dom";

const productLinks = [
  {
    id: 1,
    title: "All",
    path: "/products",
  },
  {
    id: 2,
    title: "Phones",
    path: "/products/phones",
  },
  {
    id: 3,
    title: "Tablets",
    path: "/products/tablets",
  },
  {
    id: 4,
    title: "Accessories",
    path: "/products/accessories",
  },
];

const ProductNavbar = () => {
  return (
    <div className="bg-slate-800 mt-[3.6rem] p-3 flex justify-between items-center">
      <nav className="flex items-center justify-center gap-3">
        {productLinks.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            className="text-white hover:text-slate-400"
          >
            {link.title}
          </Link>
        ))}
      </nav>
      <div className="">
        <input
          className="p-1 text-slate-100 border border-slate-400 outline-none bg-transparent rounded-md focus:border-blue-700"
          type="text"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default ProductNavbar;
