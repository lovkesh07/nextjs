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
    setTitle("Cybersecurity Services");

    setContent(
      " Protecting your digital assets is of utmost importance in today's threat landscape. Our cybersecurity services encompass a comprehensive approach to safeguarding your networks, systems, and data. We conduct thorough threat assessments to identify potential vulnerabilities, followed by vulnerability scanning and penetration testing to proactively address weaknesses. We then implement robust security measures, such as firewalls, encryption, access controls, and intrusion detection systems, to ensure the highest level of protection. Our aim is to keep your data secure, maintain regulatory compliance, and minimize the risk of cyberattacks."
    );

    setmaincontent("Protecting your digital assets is of utmost importance in today's threat landscape. Our cybersecurity services encompass a comprehensive approach to safeguarding your networks, systems, and data. We conduct thorough threat assessments to identify potential vulnerabilities, followed by vulnerability scanning and penetration testing to proactively address weaknesses. We then implement robust security measures, such as firewalls, encryption, access controls, and intrusion detection systems, to ensure the highest level of protection. Our aim is to keep your data secure, maintain regulatory compliance, and minimize the risk of cyberattacks.")
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
          <p className="text-lg">Home/ Cybersecurity Services</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Cybersecurity Services
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      {/* <Content title={"more info"} content={miancontent}/> */}

    </div>
  );
};

export default AboutUs;
