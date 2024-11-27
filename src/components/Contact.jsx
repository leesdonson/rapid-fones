import React from "react";

const Contact = () => {
  return (
    <div className="mt-[3.9rem]">
      <div className="flex items-center justify-center flex-col w-fullrounded-md">
        <div className="w-full banner-bg relative h-[250px] border border-slate-600 rounded-b-lg">
          <img
            src="/img2.png"
            alt="image"
            className="w-[100%] object-cover h-[100%] rounded-lg opacity-20"
          />
          <p className="text-2xl absolute top-0 left-0 font-semibold text-slate-200 p-2">
            Contact Us
          </p>
        </div>
        <h1 className="text-2xl font-semibold text-slate-200 p-2">
          Contact Us
        </h1>
        <div className="w-full md:w-[80%]">
          <p className="text-md text-slate-300 p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium dolor in dolores obcaecati mollitia culpa ad veritatis
            quasi nostrum. Sed! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Accusantium dolor in dolores obcaecati mollitia
            culpa ad veritatis quasi nostrum. Sed!
          </p>
          <p className="text-md text-slate-300 p-2">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium dolor in dolores obcaecati mollitia culpa ad veritatis
            quasi nostrum. Sed! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Accusantium dolor in dolores obcaecati mollitia
            culpa ad veritatis quasi nostrum. Sed!
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="w-full flex items-center justify-center flex-col border border-slate-700 mt-5 rounded-md p-1">
      <h1 className="text-2xl text-center font-semibold text-slate-200 p-2">
        Sign Up for exclusive offers,Tips and More...
      </h1>
      <div className="w-full md:w-[60%]">
        <form className="p-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-slate-600 outline-none bg-transparent text-slate-200 font-md py-2 rounded-md px-4 focus:border-blue-800 "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-slate-600 outline-none bg-transparent text-slate-200 font-md py-2 px-4 rounded-md mt-2 focus:border-blue-800"
          />
          <button
            className="w-full md:w-[30%] border border-slate-600 outline-none bg-transparent text-slate-200 font-md py-2 px-4 rounded-md mt-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
export default Contact;
