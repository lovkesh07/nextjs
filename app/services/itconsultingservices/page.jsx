"use client"
import React from "react";
import Slide1 from "@assets/hello.png";
import Image from "next/image";
import WrittenContent from "../../WrittenContent";
import Content from '../../Content';
import { useState,useEffect } from "react";
import Piclongcard from "./Piclongcard";
import Maincontent from "./Maincontent";

const AboutUs = () => {
    const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [miancontent,setmaincontent] = useState("");

  useEffect(() => {
    setTitle("IT Consulting Services");

    setContent(
     " Our expert consultants conduct in-depth assessments of your existing IT infrastructure, aligning them with your business objectives. Through our customized recommendations, we optimize your technology environment, enhance efficiency, and boost overall productivity."
    );
    setmaincontent("Our team of experienced consultants will thoroughly assess your current IT infrastructure and understand your business objectives. We provide detailed recommendations tailored to your unique needs, suggesting improvements to optimize your technology environment. Our consultants analyze your systems, processes, and workflows to enhance efficiency and productivity, ensuring that your IT aligns with your business goals.")
  }, []);
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className="mt-12 w-full h-[48vh] lg:h-[70vh] "
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold" data-aos="fade-up">
            IT Consulting Services
          </h1>
          
        </div>
      </div>

      <Maincontent/>

      {/* <WrittenContent title={title} content={content} /> */}
      <Piclongcard/>

      {/* <Content title={"more info"} content={miancontent}/> */}

    </div>
  );
};

export default AboutUs;
