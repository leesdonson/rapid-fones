const ProductList = () => {
  return (
    <div className="w-full mt-[1px]">
      <div className="w-full banner-bg relative h-[250px] border border-slate-600 rounded-b-lg">
        <img
          src="/img3.png"
          alt="image"
          className="w-[100%] object-cover h-[100%] rounded-lg opacity-20"
        />
        <p className="text-2xl absolute top-0  left-0 font-semibold text-slate-200 p-2">
          Products
        </p>
      </div>
      <h1 className="text-2xl font-semibold text-slate-200 p-2">Products</h1>
    </div>
  );
};

export default ProductList;
