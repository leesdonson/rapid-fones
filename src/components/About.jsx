import React from "react";

const About = () => {
  return (
    <div className="mt-[3.9rem]">
      <div className="flex items-center justify-center flex-col w-full">
        <div className="w-full banner-bg relative h-[250px] border border-slate-600 rounded-b-lg">
          <img
            src="https://res.cloudinary.com/dudgy6ypy/image/upload/v1733057435/lenin101_assets/kl_thumbnails/rf4_vt81g9.jpg"
            alt="image"
            className="w-[100%] object-cover h-[100%] rounded-lg opacity-50"
          />
          <p className="text-4xl absolute top-[50%] left-0 font-bold  banner-text p-2">
            About Us
          </p>
        </div>
        <div className="w-full flex gap-3 flex-col border border-slate-700 p-2 rounded-md mt-2 mb-2">
          <div className="border border-slate-700 p-2 rounded-md">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px] rounded-full bg-blue-500 mt-1 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold text-slate-200 p-2">
                Our Story
              </h1>
            </div>
            <div className="container mx-auto w-full md:w-[80%]">
              <p className="text-md text-slate-300 p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                necessitatibus, quibusdam doloremque dolorem, voluptate
                perferendis, voluptatum repellendus quae natus tempora
                consectetur. Voluptatibus, quibusdam doloremque dolorem,
                voluptate perferendis, voluptatum repellendus quae natus tempora
                consectetur.
              </p>
            </div>
          </div>
          <div className="border border-slate-700 p-2 rounded-md">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px] rounded-full bg-blue-500 mt-1 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold text-slate-200 p-2">
                Management
              </h1>
            </div>
            <div className="container mx-auto w-full md:w-[80%]">
              <p className="text-md text-slate-300 p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                necessitatibus, quibusdam doloremque dolorem, voluptate
                perferendis, voluptatum repellendus quae natus tempora
                consectetur. Voluptatibus, quibusdam doloremque dolorem,
                voluptate perferendis, voluptatum repellendus quae natus tempora
                consectetur.
              </p>
            </div>
          </div>
          <div className="border border-slate-700 p-2 rounded-md">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px] rounded-full bg-blue-500 mt-1 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold text-slate-200 p-2">
                Products & Services
              </h1>
            </div>

            <div className="container mx-auto w-full md:w-[80%]">
              <p className="text-md text-slate-300 p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                necessitatibus, quibusdam doloremque dolorem, voluptate
                perferendis, voluptatum repellendus quae natus tempora
                consectetur. Voluptatibus, quibusdam doloremque dolorem,
                voluptate perferendis, voluptatum repellendus quae natus tempora
                consectetur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
