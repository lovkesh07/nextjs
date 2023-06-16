"use client";
import React from "react";

export default function Longcard() {
  return (
    <div className="w-full">
      <div
        className=" w-[85%] mx-auto py-10 my-10 rounded-xl bg-gradient-to-r from-[#0b3eb6] to-[#81ccf1] shadow-xl shadow-gray-500"
        data-aos="fade-up"
      >
        <div className="flex flex-col justify-around w-full">
          <div className=" w-full text-gray-200 flex flex-col justify-around place-items-start px-5 sm:px-8 gap-2">
            <div className=" p-2 sm:p-3 text-sm sm:text-base rounded-md w-fit text-white bg-blue-300">
              HIRING
            </div>
            <p className=" text-xl sm:text-3xl md:text-5xl font-bold">
              Looking for Career Opportunities?
            </p>
            <span className=" text-sm sm:text-lg">
              Email your Resume to career@Dotclu.com
            </span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
