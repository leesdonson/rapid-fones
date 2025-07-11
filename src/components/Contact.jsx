import React from "react";

const Contact = () => {
  return (
    <div className="mt-[3.6rem] mb-1">
      <div className="flex items-center justify-center flex-col w-full">
        <div className="w-full banner-bg relative h-[250px] border border-slate-300 rounded-b-lg">
          <img
            src="/contact.webp"
            alt="image"
            className="w-[100%] object-cover h-[100%] rounded-lg opacity-50"
          />
          <p className="text-4xl absolute top-[50%] right-0 font-bold  banner-text p-2">
            Contact Us
          </p>
        </div>
        <div className="w-full flex gap-3 flex-col p-2 mt-2">
          <div className="border border-slate-300 bg-white p-2 rounded-md max-w-2xl w-full mx-auto">
            <div className="flex items-center justify-center gap-1">
              <span className="w-[15px] h-[15px] rounded-full bg-blue-700 inline-block"></span>
              <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold p-2">
                Head Office (Port Moresby)
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
          <div className="max-w-2xl w-full mx-auto bg-white border border-slate-300 rounded-md">
            <div className=" border-b border-slate-300 bg-gradient-to-r from-neutral-800 to-slate-400 p-2 rounded-t-md w-full ">
              <p className="text-xl font-semibold text-slate-50 px-2 py-1 text-center">
                Visit us at our nearest branches nationwide.
              </p>
            </div>
            <div className="p-2 flex flex-col gap-3">
              <div className="border border-slate-300 p-2 rounded-md max-w-2xl w-full mx-auto">
                <div className="flex items-center justify-center gap-1">
                  <span className="w-[15px] h-[15px] rounded-full bg-blue-700 inline-block"></span>
                  <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold p-2">
                    Port Moresby
                  </h1>
                </div>
                <div className="container mx-auto w-full md:w-[80%]">
                  <p className="text-md p-2 text-center">
                    Vision City | Waterfront | Range View Plaza | NAC
                  </p>
                  <p className="text-md p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure necessitatibus, quibusdam doloremque dolorem, voluptate
                    perferendis, voluptatum repellendus quae natus tempora
                    consectetur. Voluptatibus, quibusdam doloremque dolorem,
                    voluptate perferendis, voluptatum repellendus quae natus
                    tempora consectetur.
                  </p>
                </div>
              </div>

              <div className="border border-slate-300 p-2 rounded-md max-w-2xl w-full mx-auto">
                <div className="flex items-center justify-center gap-1">
                  <span className="w-[15px] h-[15px] rounded-full bg-blue-700 inline-block"></span>
                  <h1 className="text-xl md:text-2xl xl:text-3xl xl:leading-tight font-semibold p-2">
                    Out Stations
                  </h1>
                </div>

                <div className="container mx-auto w-full md:w-[80%]">
                  <p className="text-md p-2 text-center">
                    Goroka | Alotau | Mt. Hagen
                  </p>
                  <p className="text-md p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure necessitatibus, quibusdam doloremque dolorem, voluptate
                    perferendis, voluptatum repellendus quae natus tempora
                    consectetur. Voluptatibus, quibusdam doloremque dolorem,
                    voluptate perferendis, voluptatum repellendus quae natus
                    tempora consectetur.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="border mt-4 mb-2 shadow-2xl shadow-neutral-500 bg-white border-slate-300 p-2 rounded-md max-w-2xl w-full mx-auto">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col  mt-5 mb-2 rounded-md p-1">
      <h1 className="text-lg md:text-xl text-center font-semibold mb-1">
        Sign Up for exclusive offers,Tips and More...
      </h1>
      <div className="w-full">
        <form className="p-3 flex flex-col gap-4">
          <div className="w-full flex gap-2 flex-col items-start">
            <label className="text-md " htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-slate-400 outline-none bg-transparent font-md py-2 rounded px-4 focus:border-blue-800 "
            />
          </div>
          <div className="w-full flex gap-2 flex-col items-start">
            <label className="text-md" htmlFor="emain">
              Email Address:
            </label>
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="w-full border border-slate-400 outline-none bg-transparent font-md py-2 rounded px-4 focus:border-blue-800 "
            />
          </div>
          <button
            className="w-full md:w-[30%] mt-5 text-slate-50 outline-none bg-gradient-to-r from-neutral-800 to-slate-300 font-md py-2 px-4 rounded"
            type="submit"
          >
            Submit
          </button>
          <small className="text-sm font-light">
            By submitting you agree to our terms and conditions.
          </small>
        </form>
      </div>
    </div>
  );
};
export default Contact;
