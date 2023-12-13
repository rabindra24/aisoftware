import React from "react";

const Landing = () => {
  return (
    <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col ">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0">
        <h1 className="title-font sm:text-8xl pt-20 text-6xl mb-4 font-bold font-urbanist text-primary">
          Design Your
          <br className=" " />
          <span className="text-[#3B82F6]">Imagination</span>
          <br className="" />
          Solve <span className="text-[#3B82F6]">Query</span>
        </h1>

        <div className="flex justify-start">
          <a
            href="#create"
            className="inline-flex text-white bg-[#3B82F6] border-0 py-2 px-10  hover:bg-indigo-600 rounded text-lg"
          >
            Create
          </a>
        </div>
        <p className="text-gray-500">Free to use</p>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full">
        <img
          className="object-cover object-center rounded"
          alt="hero"
          src="/group.png"
        />
      </div>
    </div>
  );
};

export default Landing;
