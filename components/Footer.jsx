import React from "react";
import Link from "next/link";
import logo from "../public/Images/dotClu-removebg-preview.png"
import Image from "next/image";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import FooterLinks from "./FooterLinks";
function Footer({ List1 }) {
  return (
    <>
      <div className="bg-black h-1/2 w-full flex flex-col justify-around items-center py-16 px-5 md:px-8">
        <div className=" px-0 py-5 sm:p-5 ">
          <ul>
            <Link href="/" className=" text-3xl sm:text-5xl ">
              <Image src={logo} height={300} width={300} />
            </Link>
          </ul>
        </div>
        <div className=" py-5 md:p-5 grid grid-cols-2 md:grid-cols-4 w-full gap-5">
          {List1.map((items, index) => {
            return (
              <div key={index} className=" md:mx-auto w-full md:w-[70%]">
                <FooterLinks title={items.title} list1={items.module} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center items-center text-center  py-5 bg-black">
        <h1 className=" text-white text-xs mr-[2px]">©2023-2024</h1>
        <h1 className=" text-white text-xs hover:text-blue-500">
          All rights reserved Dotclu{" "}
        </h1>
      </div>
      <div className="flex flex-row justify-center items-center text-center  py-5 bg-black border-t-[1px] border-white">
        <Link
          href="/privacy&policy"
          className=" cursor-pointer text-xs text-white"
        >
          Privacy & Policy
        </Link>
        <div className=" h-[20px] w-[2px] mx-[12px] bg-white"></div>
        <Link
          href="/term&condition"
          className=" cursor-pointer text-xs text-white"
        >
          Term & Condition
        </Link>
      </div>
    </>
  );
}

export default Footer;
