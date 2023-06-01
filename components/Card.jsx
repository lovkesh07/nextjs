"use client";
import React from "react";


const Cards = () => {
  return (
    <div className=" w-full py-10 px-5">
      <div className="">
        <div className=" w-[90%] mx-auto py-5">
          <p className=" my-2 text-base md:text-lg pb-4">Our Services</p>
          <p className=" w-[70%] font-bold text-4xl md:text-5xl pb-4">
            We leverage technology to didgitally transform companies.
          </p>
        </div>
        <div className=" w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className=" w-full md:w-[100%] h-[30vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Digital Experience
            </h2>
            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Create ahead-of-the-curve,memorable customers experience that set
              the standard fro your audience and maintain brand loyalty.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
          <div className=" w-full md:w-[100%] h-[30vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Product Engneering
            </h2>
            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              We provide innovative and reliaable engineering solutions over the
              entire product lifecycle, while you remain focused on ypur core
              competencies
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
          <div className=" w-full  h-[30vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Data Engneering & AI
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Take your business to unprecedented heights, enhancing
              productivity and optimization through our transformational AI and
              ML capabilities
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
          <div className=" w-full h-[30vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cloud Engineering
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Create ahead-of-the-curve,memorable customers experience that set
              the standard fro your audience and maintain brand loyalty.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
          <div className=" w-full h-[30vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              NextGen Services
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Create ahead-of-the-curve,memorable customers experience that set
              the standard fro your audience and maintain brand loyalty.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
          <div className=" w-full h-[30vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              SAP Services
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Create ahead-of-the-curve,memorable customers experience that set
              the standard fro your audience and maintain brand loyalty.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
