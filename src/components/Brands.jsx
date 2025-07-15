import { motion } from "framer-motion";
const brandImages = [
  { id: 21, image: "/apple.png" },
  { id: 22, image: "/samsung.png" },
  { id: 23, image: "/honor.png" },
  { id: 24, image: "/mi.png" },
  { id: 25, image: "/huawei.png" },
];
const Brands = () => {
  return (
    <div className="flex items-center justify-center flex-col min-h-screen p-2">
      <motion.h1
        initial={{ scale: 1.6 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className=" text-2xl md:text-4xl text-slate-900 text-center mb-2 py-3 font-bold"
      >
        Distributer of the most <br />{" "}
        <span className="font-extrabold w-fit bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
          Trusted
        </span>{" "}
        Brands.
      </motion.h1>
      <div className="w-full max-w-2xl mx-auto h-full p-3 flex items-center flex-wrap gap-5 md:gap-10">
        {brandImages.map((image) => (
          <motion.div
            viewport={{ once: true }}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            key={image.id}
            className="border shadow-2xl  shadow-blue-600 hover:shadow-orange-500 border-slate-300 rounded-md w-[120px] h-[120px] cursor-pointer  md:w-[170px] md:h-[170px] p-5 relative"
          >
            <img
              className="w-full h-full animate-spin-slow duration-1000 object-contain transition-all"
              src={image.image}
              alt="brand"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
