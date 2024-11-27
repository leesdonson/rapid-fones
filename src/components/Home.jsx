import { GoArrowRight } from "react-icons/go";
import { RiArrowRightDoubleLine } from "react-icons/ri";

const Home = () => {
  return (
    <div className="w-full relative overflow-hidden linear-bg h-screen p-2 flex items-center justify-center">
      <div className="relative flex flex-col items-center w-full">
        <div className="absolute opacity-25 animate-blob top-0 left-0  bg-blue-700 w-[200px] h-[200px] rounded-full blur-2xl"></div>
        <div className="absolute opacity-25 animate-blob top-10 right-0  bg-red-700 w-[200px] h-[200px] rounded-full blur-2xl"></div>
        <h1 className="font-bold text-[5rem] leading-tight text-red-600">
          MLINK
        </h1>
        <p className="capitalize text-center text-lg text-orange-400">
          Feed your imagination
        </p>
        <div className="mt-10 flex items-center justify-center gap-5 w-full md:w-[50%]">
          <button
            className="w-full border border-slate-600 outline-none bg-transparent text-slate-200 font-md py-2 px-4 rounded-full"
            type="button"
          >
            Promo Sales...
            <GoArrowRight className="inline ml-2" />
          </button>
          <button
            className="w-full border border-slate-600 outline-none bg-transparent text-slate-200 font-md py-2 px-4 rounded-full"
            type="button"
          >
            Trending...
            <RiArrowRightDoubleLine className="inline ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
