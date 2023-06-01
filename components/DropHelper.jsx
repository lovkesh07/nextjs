"use client";
import React from "react";
import Link from "next/link";

const DropHelper = ({ title, module }) => {
  return (
    <div className="w-full">
      <h1 className=" w-full text-lg">{title}</h1>
      <div className=" w-full grid grid-cols-1 pt-3 px-5 gap-2 border-black border-r-[1px] border-solid">
        {module.map((item, i) => {
          return (
            <div key={i} className=" text-[0.9rem] w-full py-1 mx-auto hover:bg-gray-300 transition-all duration-300">
              <Link className=" mx-auto" href={item.link}>
                {item.name}
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DropHelper;
