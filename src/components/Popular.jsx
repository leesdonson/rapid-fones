import Card from "./products/Card";
import { popularProducts } from "../lib/popular-products";
import { motion } from "framer-motion";

const Popular = () => {
  return (
    <div className="border border-slate-300 py-4 px-2 rounded-md mt-5 mb-1">
      <h1 className="text-xl text-center font-bold">
        {" "}
        <span className="font-extrabold w-fit bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Popular
        </span>{" "}
        Products
      </h1>
      <p className="text-sm max-w-xl w-full mx-auto p-2">
        Explore our most popular products that have captured the attention of
        our customers. From cutting-edge technology to everyday essentials, find
        out what makes these items a favorite choice.
      </p>
      <div className="grid grid-cols-auto-fit gap-3 py-2">
        {popularProducts.map((product) => (
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

export default Popular;
