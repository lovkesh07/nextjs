"use client";
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
// import Sponsor from "./Sponsor";
// import Sectionextra from "./sectionexra";
import WrittenContent from "../../WrittenContent";
import Content from "@app/Content";
import { useState, useEffect } from "react";


const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [miancontent,setmaincontent] = useState("");

  useEffect(() => {
    setTitle("IT Training and Education:");

    setContent(
      "Staying up-to-date with the latest technology trends and acquiring relevant skills is essential in the fast-paced IT landscape. Our training and education programs provide comprehensive learning opportunities for individuals and organizations. We offer workshops, seminars, and customized training sessions in areas such as software development, cybersecurity, cloud computing, and data analytics. Our experienced trainers deliver hands-on training, equipping you and your team with the knowledge and skills needed to excel in the ever-evolving IT industry."
    );

    setmaincontent("Staying up-to-date with the latest technology trends and acquiring relevant skills is essential in the fast-paced IT landscape. Our training and education programs provide comprehensive learning opportunities for individuals and organizations. We offer workshops, seminars, and customized training sessions in areas such as software development, cybersecurity, cloud computing, and data analytics. Our experienced trainers deliver hands-on training, equipping you and your team with the knowledge and skills needed to excel in the ever-evolving IT industry.")
  }, []);
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
          <p className="text-lg">Home/ IT Training and Education</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            IT Training and Education
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <Content title={"more info"} content={miancontent}/>

    </div>
  );
};

export default AboutUs;
