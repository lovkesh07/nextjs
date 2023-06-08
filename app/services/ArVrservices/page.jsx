import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
// import Sponsor from "./Sponsor";
// import Sectionextra from "./sectionexra";
import WrittenContent from "./WrittenContent";

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
          <p className="text-lg">Home/ Services/ AR/VR Services</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
          AR/VR Services
          </h1>
          
        </div>
      </div>
      <WrittenContent />
    </div>
  );
};

export default page;
