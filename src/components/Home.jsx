import { GoArrowRight } from "react-icons/go";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Feature from "./Feature";
import Popular from "./Popular";
import Brands from "./Brands";
import { useNavigate } from "react-router-dom";
import Background from "./background";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full relative overflow-hidden linear-bg h-screen p-2 flex items-center justify-center">
        <Background />
        <div className="relative flex flex-col items-center  w-full">
          <div className="absolute opacity-45 animate-blob top-0 left-0  bg-blue-700 w-[200px] h-[200px] rounded-full blur-2xl" />
          <div className="absolute opacity-45 animate-blob top-10 right-0  bg-red-700 bg-gradient-to-tr from-red-600  w-[200px] h-[200px] rounded-full blur-2xl" />
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
            className="w-full sm:w-[70%] bg-gradient-to-r from-black/50 to-neutral-500/50 rounded-md p-3 flex flex-col items-center shadow-custom mb-8"
          >
            <h1 className="font-bold text-[5rem] leading-tight stroke text-transparent bg-clip-text bg-gradient-to-r -tracking-tighter from-blue-800 to-orange-600">
              MLINK
            </h1>

            <p className="capitalize text-center text-lg text-slate-200">
              Feed your imagination
            </p>
          </motion.div>
          <div className="w-full md:w-[50%] text-center  text-slate-200 bg-black/40  rounded-md p-2">
            <p className="text-sm">
              For all your mobile phone needs, look no further than our website.
              We offer a wide range of high-quality products at competitive
              prices.
            </p>
          </div>
          <div className="mt-8 flex items-center justify-center gap-5 w-full md:w-[50%]">
            <motion.button
              initial={{ opacity: 0, y: -200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  ease: "easeIn",
                },
              }}
              className="w-full sm:w-[30%] md:w-[50%] bg-gradient-to-r from-slate-100 to-neutral-600 outline-none bg-transparent text-slate-900 shadow-md shadow-slate-50 font-md py-2 px-4 rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
              type="button"
              onClick={() => navigate("/products")}
            >
              Products...
              <GoArrowRight className="inline ml-2" />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: -200 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.2, ease: "easeIn" },
              }}
              className="w-full sm:w-[30%] md:w-[50%] to-neutral-400 bg-gradient-to-r from-neutral-900 outline-none bg-transparent shadow-md shadow-slate-50  text-slate-200 font-md py-2 px-4 rounded-full hover:scale-105 transition-all duration-300 ease-in-out"
              type="button"
              onClick={() => navigate("/contact")}
            >
              Contact Us...
              <RiArrowRightDoubleLine className="inline ml-2" />
            </motion.button>
          </div>
        </div>
      </div>
      <div className="">
        <Brands />
        <Feature />
        <Popular />
      </div>
    </>
  );
};

export default Home;
