import React from "react";

const About = () => {
  return (
    <div className="mt-[3.9rem]">
      <div className="flex items-center justify-center flex-col w-full">
        <div className="w-full banner-bg relative h-[250px] border border-slate-600 rounded-b-lg">
          <img
            src="/homebg.webp"
            alt="image"
            className="w-[100%] object-cover h-[100%] rounded-lg opacity-50"
          />
          <p className="text-4xl absolute top-[50%] left-0 font-bold  banner-text p-2">
            About Us
          </p>
        </div>
        <div className="w-full flex gap-3 flex-col p-2 mt-2 mb-2">
          <div className="border border-slate-300 bg-white p-2 rounded-md max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px] rounded-full bg-blue-700 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold p-2">
                Our Story
              </h1>
            </div>
            <div className="container mx-auto w-full md:w-[80%]">
              <p className="text-md  p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                necessitatibus, quibusdam doloremque dolorem, voluptate
                perferendis, voluptatum repellendus quae natus tempora
                consectetur. Voluptatibus, quibusdam doloremque dolorem,
                voluptate perferendis, voluptatum repellendus quae natus tempora
                consectetur.
              </p>
            </div>
          </div>
          <div className="border border-slate-300 bg-white p-2 rounded-md max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px] rounded-full bg-blue-700 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold p-2">
                Management
              </h1>
            </div>
            <div className="container mx-auto w-full md:w-[80%]">
              <p className="text-md p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                necessitatibus, quibusdam doloremque dolorem, voluptate
                perferendis, voluptatum repellendus quae natus tempora
                consectetur. Voluptatibus, quibusdam doloremque dolorem,
                voluptate perferendis, voluptatum repellendus quae natus tempora
                consectetur.
              </p>
            </div>
          </div>
          <div className="border border-slate-300 bg-white p-2 rounded-md max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[20px] h-[20px] rounded-full bg-blue-700 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold p-2">
                Products & Services
              </h1>
            </div>

            <div className="container mx-auto w-full md:w-[80%]">
              <p className="text-md p-2">
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
