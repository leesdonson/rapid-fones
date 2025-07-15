import { useContext, useEffect, useState } from "react";
import { products } from "../../lib/products";
import { FilterContext } from "../../contexts/FilterContext";
import { motion } from "framer-motion";
import Card from "./Card";

const ProductList = () => {
  const limit = 15;
  const [skip, setSkip] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const {
    selectedCategory,
    setSelectedCategory,
    selectedBrand,
    searchTerm,
    setSelectedBrand,
  } = useContext(FilterContext);

  useEffect(() => {
    setSelectedCategory(selectedCategory ? selectedCategory : "all");
    setSelectedBrand(selectedBrand ? selectedBrand : "all");
  }, []);

  // let filteredProducts = [];
  // Filter products based on selected category
  const filterCategory = products.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      return product.category === selectedCategory;
    }
  });

  // Further filter products based on selected brand
  const filterBrand = filterCategory.filter((product) => {
    if (selectedBrand === "all") {
      return true;
    }
    return product.brand.toLowerCase() === selectedBrand.toLowerCase();
  });

  // filter by search term
  const filterSearch = filterBrand.filter((product) => {
    if (!searchTerm) return true;
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  useEffect(() => {
    setFilteredProducts(filterBrand);
  }, [selectedCategory, selectedBrand]);

  // get random products
  const randomProducts = filterSearch.sort(() => Math.random() - 0.5);

  //slice 1st 15 for pagination
  const slicedProducts = randomProducts.slice(skip, skip + limit);

  if (!slicedProducts || slicedProducts.length === 0) {
    return (
      <div className="w-full h-[400px] flex items-center justify-center">
        <div className="w-full md:max-w-lg mx-auto flex-col p-10 flex bg-white border border-slate-300 rounded-md items-center justify-center">
          <p> Product not found!</p>
          <small className="mt-5 text-sm">
            Please adjust the filters to find the product you are looking for.
          </small>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="">
        <p className="text-sm text-slate-800">
          Showing {limit} of {products.length} results
        </p>
      </div>
      <div className="grid grid-cols-auto-fit gap-3 py-2 mb-5 px-1">
        {slicedProducts.map((item) => (
          <motion.div
            initial={{ scale: 0.5 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            key={item.slug}
            className="border border-slate-300 bg-white shadow-lg hover:scale-105 rounded-md"
          >
            <Card product={item} />
          </motion.div>
        ))}
      </div>
      <div className="flex items-center justify-center text-slate-200 gap-5 mb-5">
        <button
          disabled={skip === 0}
          onClick={() => setSkip(skip - limit)}
          className="bg-slate-900 w-[30%] py-2 rounded"
          type="button"
        >
          Previous
        </button>
        <button
          disabled={skip + limit >= filteredProducts.length}
          onClick={() => setSkip(skip + limit)}
          className="bg-slate-900 w-[30%] py-2 rounded"
          type="button"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;
