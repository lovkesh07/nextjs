"use client";
import React from "react";

export default function longcard() {
  return (
    <div className="w-full">
      <div className=" w-[85%] mx-auto py-10 my-10 rounded-xl bg-gradient-to-r from-[#a6f2f2] to-[#ddf181] shadow-xl shadow-gray-500">
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div className=" w-3/4 md:w-fit mx-8 m-6 text-gray-600 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            7+{" "} <br/>
          </p>
            <span className="text-lg">Countries served globally</span>{" "}
        </div>
        <div className=" w-3/4 md:w-fit  mx-8 m-6 text-gray-600 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            200+{" "} <br/>
          </p>
            <span className="text-lg">
            Creators onboarded within 1 week
            </span>{" "}
        </div>
        <div className=" w-3/4 md:w-fit  mx-8 m-6 text-gray-600 flex flex-col items-center gap-2">
          <p className=" text-5xl md:text-6xl font-bold">
            1800+ <br/> 
          </p>
            <span className="text-lg">Increase in user Onboarding</span>
        </div>
      </div>
    </div>
      </div>
  );
}

