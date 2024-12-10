import { useParams } from "react-router-dom";
import { products } from "../../lib/products";

const ProductDetails = () => {
  const { slug } = useParams();
  const productDetails = products.find((product) => product.slug === slug);
  console.log(productDetails);

  return (
    <div className="w-full mt-1 mb-1 border border-slate-700 p-2 rounded-md">
      <div className="flex items-center justify-center relative my-2">
        <button
          onClick={() => window.history.back()}
          className="border absolute left-0 top-0 border-slate-600 outline-none w-[20%] md:w-[10%] bg-transparent text-slate-200 font-md py-1 px-4 rounded-lg"
          type="button"
        >
          Back
        </button>
        <h1 className="text-slate-200 text-xl font-bold">Product Details</h1>
      </div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-1 md:gap-3">
        <div className="w-full">
          <img
            src={`/${productDetails.image}`}
            alt={productDetails.name}
            className="w-[100%] object-contain"
          />
        </div>
        <div className="w-full text-white">
          <h1 className="text-lg font-bold">Name: {productDetails.name}</h1>
          <p className="text-lg font-semibold">Slug: {productDetails.slug}</p>
          <p className="text-lg font-semibold">
            Product ID: {productDetails.id}
          </p>
          <p className="text-lg font-semibold">
            Description: {productDetails.description}
          </p>
          <p className="text-lg font-semibold">Price: {productDetails.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
