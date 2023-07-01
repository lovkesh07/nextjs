import React from "react";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
function Footer({ List1 }) {
  return (
    <>
      <div className="bg-[#282A3A] h-1/2 w-full flex flex-col justify-around items-center py-16 px-5 md:p-20">
        <div className=" px-0 py-5 sm:p-5 ">
          <ul>
            <p className="text-gray-600 font-bold mx-auto text-3xl pb-6">
              .DOT<span className="text-blue-600">cLU</span>
            </p>
          </ul>
        </div>
        <div className=" py-5 md:p-5 grid grid-cols-2 w-full gap-5">
          {List1.map((items,index) => {
            return (<div key={index} className=" md:mx-auto w-full md:w-[70%]"><FooterLinks title={items.title} list1={items.module}/></div>);
          })}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-[#000000]">
        <h1 className=" text-slate-300 font-semibold">
          ©2023-2024 All rights reserved Dotclu{" "}
        </h1>
      </div>
    </>
  );
}

export default Footer;
