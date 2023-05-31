import React from "react";
import Slide1 from "@assets/img1.jpg";
import Testimonialpg from "./Testimonialpg";
import Image from "next/image";

const pages = () => {
  return (
    <div className="mt-[80px]">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">Home/Tesimonials</p> 
          <h1 className="text-3xl sm:text-5xl font-bold">
            What our clients say
          </h1>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-6xl py-5 font-medium pr-2"> Want to know what we do and how we do it?<br/> Hear straight from our clients.</p>
       <br/><br/>
        <div className="text-left lg:px-24 lg:text-justify"> 

        <p className=" text-xl md:text-2xl lg:text-2xl">
        We collaborate, consult, and integrate with companies worldwide. Together, we craft unique, cutting-edge, and business-changing IT solutions. Our expertise helps companies do business faster, better, and smarter. We are lucky to do this for leaders across various industry verticals. We provide services to the retail, travel, e-commerce, education, and hospitality sectors and make technology work across manufacturing, consumer goods, logistics, and supply chain management. We integrate solutions that drive sales across lifestyle, non-profits and banking, financial services, and insurance (BFSI).
        </p> <br/>
        <p className=" text-xl md:text-2xl lg:text-2xl ">We have developed a great reputation for helping companies because we never let ourselves forget that we’re fortunate to have our clients and not the other way around. From start-ups at incubation to global giants at the top of the Fortune 500 list, we have been lucky to work with some of the leading brands in the world. In return, they have been kind enough to share their experiences working with us.</p>
      </div>
        </div>
      <Testimonialpg />
    </div>
  );
};

export default pages;
