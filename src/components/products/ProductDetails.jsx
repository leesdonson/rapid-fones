import { useParams } from "react-router-dom";
import { products } from "../../lib/products";
import { FaArrowCircleLeft } from "react-icons/fa";

const ProductDetails = () => {
  const { slug } = useParams();
  const productDetails = products.find((product) => product.slug === slug);

  return (
    <div className="w-full mt-1 mb-1 border bg-white border-slate-300 rounded-md">
      {/* header */}
      <div className="flex bg-blue-950 text-slate-100 items-center justify-between px-10 rounded-t-md">
        <button
          onClick={() => window.history.back()}
          className="flex text-sm items-center justify-center gap-2 p-2 outline-none "
          type="button"
        >
          <FaArrowCircleLeft size={20} color="white" />
          <span className="hidden md:inline">Back</span>
        </button>
        <h1 className="text-sm font-bold">Product Details</h1>
      </div>
      {/* product info */}
      <div className="w-full p-2 flex flex-col md:flex-row gap-1 md:gap-3">
        {/* product image  */}
        <div className="flex w-full md:w-[40%] items-center justify-center">
          <div className="w-full h-[200px] md:h-[450px]">
            <img
              src={productDetails?.image}
              alt={productDetails?.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        {/* product details */}
        <div className=" w-[95%] md:w-[60%] max-w-2xl  mx-auto">
          <div className="w-full">
            <div className="w-full flex items-center justify-center flex-col">
              <h1 className="text-2xl py-2 w-fit bg-gradient-to-r from-blue-800 to-orange-500 bg-clip-text text-transparent text-center font-bold">
                {productDetails?.name}
              </h1>
              <small className="text-xs text-left italic">
                Released Date: {productDetails?.releasedDate}
              </small>
            </div>
            {/* line */}
            <div className="w-full h-[1px] bg-slate-600 my-2"></div>
            <Details title1="Price" prop1={`K ${productDetails.price}`} />
            <Details
              title1={"Category"}
              title2={"Brand"}
              prop1={productDetails.category}
              prop2={productDetails.brand}
            />
            <Details
              title1="Main Camera"
              prop1={productDetails.mainCamera}
              title2="Front Camera"
              prop2={productDetails.frontCamera}
            />
            <Details title1="Video Resolution" prop1={productDetails.video} />
            <Details
              title1="RAM"
              prop1={productDetails.ram}
              title2="Storage"
              prop2={productDetails.internalMemory}
            />
            <Details
              title1="Display"
              prop1={productDetails.display}
              title2="Display Type"
              prop2={productDetails.displayType}
            />
            <Details
              title1="Battery"
              prop1={productDetails.battery}
              title2="Network"
              prop2={productDetails.network}
            />
            <Details title1="Description" prop1={productDetails.description} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Details = ({ title1, prop1, title2 = null, prop2 = null }) => {
  return (
    <div className="border flex items-center justify-between rounded  hover:scale-105 mb-1 border-slate-200 p-2">
      <div className="text-sm">
        <p className="font-bold mb-1">{title1}: </p>
        <span className="font-light ">{prop1}</span>
      </div>
      {title2 && prop2 && (
        <div className="text-sm">
          <p className="text-sm font-bold mb-1">{title2}:</p>
          <span className="font-light capitalize">{prop2}</span>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
