"use client";
import React from "react";
import { Link } from "react-router-dom";

const Cards = () => {
  return (
    <div className=" w-full  bg-[#E7E4E1] py-10 px-5">
    <div className="">
      <div className=" w-[90%] mx-auto py-5">
        <p className=" my-2 lg:pl-10  text-2xl md:text-lg pb-4 lg:text-4xl">Read also</p>
      </div>

      <div className=" w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" w-full md:w-[100%] h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500  hover:scale-[1.01] hover:shadow-black transition-all duration-300 delay-100">
          <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
            The great minds behind leadership
          </p>
          <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
            Leadership
          </h2>
          <span className=" w-[100%] text-right pr-4 text-white">
            learn more
          </span>
        </div>

        <div className=" w-full md:w-[100%] h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100">
          <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
            What our clients say
          </p>
          <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
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
