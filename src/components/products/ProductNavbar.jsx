import { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineClose } from "react-icons/md";
import { categories } from "../../lib/categories";
import { FilterContext } from "../../contexts/FilterContext";
import { products } from "../../lib/products";
import { Link } from "react-router-dom";

const ProductNavbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);

  const toggleSearch = () => setOpenSearch(!openSearch);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const reset = () => setSearchTerm("");

  return (
    <div className="bg-slate-800 mt-[3rem] flex flex-col">
      <div className="w-full banner-bg relative h-[250px] border border-slate-600 rounded-b-lg">
        <img
          src="https://res.cloudinary.com/dudgy6ypy/image/upload/v1733057437/lenin101_assets/kl_thumbnails/rf1_drttzl.jpg"
          alt="image"
          className="w-[100%] object-cover h-[100%] rounded-lg opacity-50"
        />
        <p className="text-2xl md:text-4xl absolute  top-[50%] right-0 font-bold banner-text p-2">
          Products
        </p>
      </div>
      <div className="flex w-full relative items-center justify-between flex-col sm:flex-row gap-5 py-3 px-6">
        <div className="flex items-center justify-center gap-3">
          {categories.map((category, i) => (
            <div
              key={i + 1}
              className="text-slate-100 flex items-center justify-center gap-2"
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
              <label className="cursor-pointer capitalize" htmlFor={category}>
                {category}
              </label>
            </div>
          ))}
        </div>
        <div className="flex w-full items-center justify-center relative gap-3">
          <button className="md:hidden" onClick={toggleSearch} type="button">
            {openSearch ? (
              <MdOutlineClose size={30} color="white" />
            ) : (
              <CiSearch size={30} color="white" />
            )}
          </button>
          <input
            className={
              !openSearch
                ? "p-1 hidden md:flex custom-search transition-all duration-150 text-slate-100 border border-slate-400 w-full md:w-[80%] lg:w-[60%] outline-none bg-slate-700 rounded-md focus:border-blue-700"
                : "p-1 flex custom-search open text-slate-100 border border-slate-400 w-full outline-none bg-slate-700 rounded-md focus:border-blue-700"
            }
            type="text"
            name="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            id="search"
            autoComplete="off"
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
    <div className="flex border h-[300px] overflow-y-auto border-slate-600 rounded-md bg-blue-950 opacity-100 items-center justify-center text-white absolute top-[100%] mt-[2.7rem] z-30 left-0 w-[100%] md:w-[70%]">
      <div className="flex flex-col p-1 w-full">
        {filteredProducts.map((product) => (
          <Link
            onClick={clearSearch}
            to={`/products/details/${product.slug}`}
            key={product.id}
            className="flex items-center justify-between border border-slate-100 w-full p-1 my-1"
          >
            <img
              src={`/${product.image}`}
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
