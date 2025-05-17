import React from "react";

const brandImages = [
  { id: 21, image: "/apple.png" },
  { id: 22, image: "/samsung.png" },
  { id: 23, image: "/honor.png" },
  { id: 24, image: "/mi.png" },
  { id: 25, image: "/huawei.png" },
];
const Brands = () => {
  return (
    <div className="bg-gray-300 h-[300px] overflow-y-auto p-2">
      <h1 className=" text-lg md:text-2xl text-slate-900 text-center mb-2 py-3 font-bold">
        Distributer of the most Trusted Brands
      </h1>
      <div className="w-full h-full overflow-y-auto grid grid-cols-3 md:grid-cols-5 gap-3">
        {brandImages.map((image) => (
          <div
            key={image.id}
            className="border border-slate-600 rounded-md w-[120px] h-[120px]  md:w-[170px] md:h-[170px] p-5 relative"
          >
            <img
              className="w-full h-full animate-spin-slow duration-1000 object-contain transition-all"
              src={image.image}
              alt="brand"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
