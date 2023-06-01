"use client";
import React from "react";
import Link from "next/link";

const DropHelper = ({ title, module }) => {
  return (
    <div>
      <h1 className=" text-lg">{title}</h1>
      <div className=" grid grid-cols-2 gap-3 border-black border-r-[1px] border-solid">
        {module.map((item, i) => {
          return (
            <div key={i} className=" text-[0.9rem] w-full py-2 mx-auto">
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
