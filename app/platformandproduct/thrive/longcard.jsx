"use client";
import React from "react";

export default function longcard() {
  return (
    <div className="w-full">
      <div className=" w-[85%] mx-auto py-10 my-10 rounded-xl bg-gradient-to-r from-[#0b3eb6] to-[#81ccf1] shadow-xl shadow-gray-500" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div className=" w-3/4 md:w-fit mx-8 m-6 text-gray-200 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            24000+{" "} <br/>
          </p>
            <span className="text-lg">Users per day</span>{" "}
        </div>
        <div className=" w-3/4 md:w-fit  mx-8 m-6 text-gray-200 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            35000+{" "} <br/>
          </p>
            <span className="text-lg">
            Employee requests processed per month
            </span>{" "}
        </div>
        <div className=" w-3/4 md:w-fit  mx-8 m-6 text-gray-200 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            {`<6`} <br/> 
          </p>
            <span className="text-lg">Seconds Website Loading time</span>
        </div>
      </div>
    </div>
      </div>
  );
}

