import React from "react";
import WrittenContent from "./WrittenContent";
import Slide1 from "@assets/img1.jpg";
import Brands from "../brands";
import Image from "next/image";
import Card from "./Card";
import Blogs from "../Blogs";
import Sectionexra from "./sectionexra";

const page = () => {
  return (
    <div className="mt-[80px] bg-gray-300">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          {/* <p className="text-lg">
            Home/Digital Experience/Product Design
          </p>{" "} */}
          <br />
          <h1 className="text-3xl sm:text-5xl font-bold">
            Product Design
          </h1>{" "}
          <br />
          <p>Creating standout digital experiences that put your users first</p>
        </div>
      </div>
      <WrittenContent />
      <Sectionexra/>
      <Brands/>
      <Card/>
      <Blogs/>
    </div>
  );
};

export default page;
