import { useContext, useState } from "react";
import { FilterContext } from "../../contexts/FilterContext";
import { products } from "../../lib/products";
import { Link } from "react-router-dom";
import { categories, brands } from "../../lib/filters";
import { RiArrowDropDownLine } from "react-icons/ri";
import { clsx } from "clsx";

const ProductNavbar = () => {
  const [showNav, setShowNav] = useState(false);

  const {
    selectedCategory,
    setSelectedCategory,
    setSelectedBrand,
    setSearchTerm,
    searchTerm,
  } = useContext(FilterContext);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const reset = () => setSearchTerm("");

  return (
    <div className="bg-slate-800/80 fixed top-0 backdrop-blur-xl z-30 left-0 right-0 mt-[3rem] md:mt-[1.9rem] flex flex-col">
      <div className="relative">
        <div
          className="flex md:hidden items-center gap-3 text-slate-100 p-1"
          onClick={() => setShowNav(!showNav)}
        >
          <RiArrowDropDownLine
            size={25}
            className={clsx("cursor-pointer", {
              "rotate-180": showNav,
            })}
          />
          <small className="text-xs">
            {showNav ? "Close Filters" : "Open Filters"}
          </small>
        </div>
        <div
          className={clsx(
            "md:flex p-nav w-full bg-slate-800 items-center absolute top-8 left-0 right-0 justify-between flex-col sm:flex-row gap-5 py-3 p-2 md:px-6",
            { "p-nav show": showNav }
          )}
        >
          {/* category */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 w-full">
            <div className="flex items-center justify-center md:gap-5 gap-8">
              {categories.map((category, i) => (
                <div
                  key={i + 1}
                  className="text-slate-100 flex md:items-center md:justify-center"
                >
                  <input
                    type="radio"
                    className="accent-orange-500 cursor-pointer"
                    name="items"
                    checked={selectedCategory === category}
                    id={category}
                    value={category}
                    onChange={handleCategoryChange}
                  />
                  <label
                    className="cursor-pointer ml-[2px] text-sm capitalize"
                    htmlFor={category}
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
            {/* brand */}
            <div className="flex w-full items-center justify-center gap-2 sm:gap-5">
              <div className="w-full">
                <select
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="bg-transparent border border-slate-50 text-slate-100 rounded p-[4px] outline-none focus:border-orange-600 capitalize w-full  cursor-pointer"
                >
                  <option disabled className="bg-slate-800 text-sm" value="">
                    Select Brand
                  </option>
                  {brands.map((brand) => (
                    <option
                      className="bg-slate-800 mt-1 rounded text-sm capitalize"
                      key={brand}
                      value={brand}
                    >
                      {brand}
                    </option>
                  ))}
                </select>
              </div>
              {/* search */}
              <div className="flex w-full items-center justify-center relative gap-3">
                <input
                  onChange={(e) => setSearchTerm(e.target.value)}
                  value={searchTerm}
                  type="text"
                  className="w-full rounded bg-transparent p-[4px] border border-slate-50 outline-none focus:border-orange-600 text-slate-100"
                  placeholder="Search"
                />
                {searchTerm && (
                  <SearchResult
                    searchTerm={searchTerm}
                    products={products}
                    resetSearch={reset}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchResult = ({ searchTerm, products, resetSearch }) => {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    resetSearch("");
  };
  return (
    <div className="flex border h-[300px] overflow-y-auto border-slate-600 bg-black opacity-100 items-center flex-col text-white absolute p-2 top-[100%] mt-[2.7rem] z-30 left-0 w-full rounded-md">
      <p>Search Result</p>
      <div className="flex flex-col p-1 w-full">
        {filteredProducts.map((product) => (
          <Link
            onClick={clearSearch}
            to={`/products/details/${product.slug}`}
            key={product.slug}
            className="flex items-center justify-between border border-slate-600 rounded w-full p-1 my-1"
          >
            <img
              src={`${product.image}`}
              alt={product.name}
              className="w-[50px] h-[50px] object-contain"
            />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductNavbar;
