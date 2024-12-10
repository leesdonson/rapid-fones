import React from "react";
import Card from "./products/Card";
import { products } from "../lib/products";

const Feature = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="border border-slate-700 p-2 rounded-md mt-2">
      <h1 className="text-xl text-slate-300 font-bold">Featured Products</h1>
      <div className="grid grid-cols-auto-fit gap-3 py-2">
        {featuredProducts.map((image) => (
          <div
            key={image.id}
            className="border border-slate-700 p-2 rounded-md "
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

export default Feature;
