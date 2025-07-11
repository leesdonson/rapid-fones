import Card from "./products/Card";
import { featuredProducts } from "../lib/featured-products";
import { motion } from "framer-motion";

const Feature = () => {
  return (
    <div className="border border-slate-300 py-4 px-2 rounded-md mt-2">
      <h1 className="text-xl text-center font-bold">
        {" "}
        <span className="font-extrabold w-fit bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Featured
        </span>{" "}
        Products
      </h1>
      <p className="text-sm max-w-xl w-full mx-auto p-2">
        Discover our top-rated products that combine quality and innovation.
        Explore the latest in technology with our featured selection, designed
        to enhance your lifestyle and meet your needs.
      </p>
      <div className="grid grid-cols-auto-fit gap-3 py-2">
        {featuredProducts.map((product) => (
          <motion.div
            initial={{ x: -90 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true }}
            key={product.slug}
            className="border border-slate-300 bg-white shadow-lg hover:scale-105 rounded-md"
          >
            <Card product={product} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
