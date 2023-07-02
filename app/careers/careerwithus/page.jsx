import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Sectionextra from "./sectionexra";
import WrittenContent from "./WrittenContent";
import WrittenContent2 from "./WrittenConten2";
import MainContainer from "../../MainContainer";
import gifyy from "../../../public/Images/LandingPage.gif";
import gifyy2 from "../../../public/Images/gif2.gif";
import gifyy3 from "../../../public/Images/gif3.gif";


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
          <h1 className="text-3xl sm:text-5xl font-bold">
            Start your Career with <br />
            Dotclu
          </h1>
        </div>
      </div>
      <WrittenContent />
      <Sectionextra />

        <h1 className="p-12 md:p-20 text-xl sm:text-4xl md:text-5xl font-bold" data-aos="fade-up">Current Openings :</h1>
      <div className="py-16 lg:py-16 px-8 w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        
        <MainContainer serviceName={"Software Developer:"} serviceContent={"Join our development team and contribute to the design, development, and testing of innovative software solutions. Strong programming skills and a passion for creating high-quality code are a must."} serviceLink={"/About/ContactUs"} Img={gifyy} />
        <MainContainer serviceName={"Cybersecurity Analyst:"} serviceContent={"Help our clients safeguard their digital assets by analyzing threats, implementing security measures, and providing guidance on best practices in cybersecurity."} serviceLink={"/About/ContactUs"} Img={gifyy2} />
        <MainContainer serviceName={"Cloud Solutions Architect:"} serviceContent={"Design and implement scalable and secure cloud-based solutions for our clients. Experience with cloud platforms and a deep understanding of cloud architecture principles are essential."} serviceLink={"/About/ContactUs"} Img={gifyy3} />
        
      </div>
      <WrittenContent2 />
    </div>
  );
};

export default page;
