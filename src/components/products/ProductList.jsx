import { useContext, useEffect } from "react";
import { products } from "../../lib/products";
import Card from "./Card";
import { FilterContext } from "../../contexts/FilterContext";
const ProductList = () => {
  const { selectedCategory, setSelectedCategory } = useContext(FilterContext);

  useEffect(() => {
    setSelectedCategory("all");
  }, []);

  const filteredProducts = products.filter((product) => {
    if (selectedCategory === "all") {
      return true;
    } else {
      return product.category === selectedCategory;
    }
  });

  return (
    <div className="w-full mt-[1px]">
      <div className="grid grid-cols-auto-fit gap-3 py-2 px-1">
        {filteredProducts.map((image) => (
          <div
            key={image.id}
            className="border border-slate-700 p-2 rounded-md"
          >
            <Card
              name={image.name}
              description={image.description}
              price={image.price}
              image={image.image}
              slug={image.slug}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
