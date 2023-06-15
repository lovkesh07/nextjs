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
    setTitle("Data Analytics and Business Intelligence");

    setContent(
        "Extracting valuable insights from your data can drive informed decision-making and give you a competitive edge. Our data analytics and business intelligence services enable you to leverage your data effectively. We employ advanced analytics tools and techniques to process and analyze your data, identifying trends, patterns, and actionable intelligence. Our experts create interactive dashboards, reports, and visualizations that allow you to explore and understand your data easily, helping you make data-driven decisions for improved operational efficiency and strategic planning."
    );

    setmaincontent("Extracting valuable insights from your data can drive informed decision-making and give you a competitive edge. Our data analytics and business intelligence services enable you to leverage your data effectively. We employ advanced analytics tools and techniques to process and analyze your data, identifying trends, patterns, and actionable intelligence. Our experts create interactive dashboards, reports, and visualizations that allow you to explore and understand your data easily, helping you make data-driven decisions for improved operational efficiency and strategic planning.")
  }, []);
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
          <p className="text-lg">
            Home/ Data Analytics and Business Intelligence
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Data Analytics and Business Intelligence
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <Content title={"more info"} content={miancontent}/>

    </div>
  );
};

export default AboutUs;
