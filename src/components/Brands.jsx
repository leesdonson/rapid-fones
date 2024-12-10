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
    <div className="bg-gray-500">
      <h1 className=" text-lg md:text-2xl text-black text-center py-3 font-bold">
        Distributer of the most Trusted Brands
      </h1>
      <div className="w-full overflow-hidden flex items-center justify-between flex-wrap px-3 py-5">
        {brandImages.map((image) => (
          <div key={image.id} className="">
            <img
              className="w-[60px] h-[60px] md:h-[100px] md:w-[100px] animate-spin-slow duration-1000 object-contain transition-all"
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
