"use client"
import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
// import Sponsor from "./Sponsor";
// import Sectionextra from "./sectionexra";
import WrittenContent from "../../WrittenContent";
import Content from '../../Content';
import { useState,useEffect } from "react";


const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [miancontent,setmaincontent] = useState("");


  useEffect(() => {
    setTitle("Custom Software Development");

    setContent(
      "Our cloud computing services enable you to leverage the power of cloud technology for enhanced efficiency and flexibility. We help you migrate your IT infrastructure to the cloud, ensuring a smooth transition and optimizing resource allocation. Additionally, we develop cloud-native applications, taking full advantage of cloud capabilities. Our team assists with cloud strategy formulation, cloud infrastructure setup, data migration, and ongoing cloud management to ensure your business benefits from increased scalability, cost-efficiency, and accessibility.."
    );

    setTitle("We specialize in creating customized software applications to meet your specific business requirements. Our skilled development team utilizes the latest technologies, programming languages, and frameworks to design and build software solutions. Whether you need a web application, mobile app, or enterprise software system, we ensure that the software is scalable, secure, and user-friendly, providing seamless functionality and a superior user experience.")
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
          <p className="text-lg">Home/Custom Software Development</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Custom Software Development
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <Content title={"more info"} content={miancontent}/>
    </div>
  );
};

export default AboutUs;
