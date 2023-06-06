import React from "react";
import WrittenContent from "./WrittenContent";
import Slide1 from "@assets/img1.jpg";
import Brands from "../brands";
import Image from "next/image";
import Card from "./Card";
import Blogs from "../Blogs";
import Sectionexra from "./sectionexra";
import Bottomcard from "./bottomcard";

const page = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">
            Home/Digital Experience/Product Strategy & Consulting
          </p>{" "}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Product Strategy & Consulting
          </h1>{" "}
          <br />
          <p>Defining product strategies that meet your unique needs</p>
        </div>
      </div>
      <WrittenContent />
      <Sectionexra/>
      <Brands/>
      <Card/>
      {/* <Blogs/> */}
      <Bottomcard/>
    </div>
  );
};

export default page;
