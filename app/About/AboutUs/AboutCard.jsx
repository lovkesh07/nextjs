"use client";
import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className=" w-full  bg-[#E7E4E1] py-10 px-5">
      <div className="">
        <div className=" w-[90%] mx-auto py-5">
          <p className=" my-2 text-base md:text-lg pb-4">Read also</p>
        </div>
        <div className=" w-[95%] sm:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className=" w-full md:w-[100%] h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col px-3 sm:px-5 py-5 rounded-md shadow-md bg-blue-500 shadow-black hover:scale-105 transition-all duration-300 delay-100">
            <p className=" text-left text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              The great minds behind leadership
            </p>
            <h2 className=" w-full text-left px-3 py-2 text-3xl lg:text-5xl font-bold text-white">
              Leadership
            </h2>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>
          <div className=" w-full md:w-[100%] h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col px-3 sm:px-5 py-5 rounded-md shadow-md bg-purple-500 shadow-black hover:scale-105 transition-all duration-300 delay-100">
            <p className=" text-left text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              What our clients say
            </p>
            <h2 className=" w-full text-left px-3 py-2 text-3xl lg:text-5xl font-bold text-white">
              Testimonials
            </h2>
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
