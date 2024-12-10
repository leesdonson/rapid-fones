import React from "react";
import { Link } from "react-router-dom";

const Card = ({ name, description, price, image, slug }) => {
  return (
    <div className="text-slate-100 h-[100%] ">
      <div className="w-full">
        <img src={image} className="w-[100%] object-contain" alt="iPhone" />
      </div>
      <div className="">
        <h1 className="text-2xl font-semibold">{name}</h1>
        <p className="text-md">{description}</p>
        <p className="text-md">Price: {price}</p>
      </div>
      <div className="mt-5 flex items-center justify-center">
        <Link
          to={`/products/details/${slug}`}
          className="underline underline-offset-1 text-md text-blue-500"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
