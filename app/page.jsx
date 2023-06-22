import React from "react";
import Cards from "@components/Card";
import Longcard from "@components/Longcard";
// import Sponser from "@components/Sponsor";
import ImgSlider from "@components/ImgSlider";
import Ourmission from "@components/Ourmission";
// import Testimonialpg from "@components/Testimonialpg";
import AnimationSlider from "@components/AnimationSlider";
import MainContainer from "./MainContainer";
import img from "../public/Images/silkimg.jpg";

import img1 from "../public/Images/itcon.webp";
import img2 from "../public/Images/csd.png";
import img3 from "../public/Images/cc.jpg";
import img4 from "../public/Images/cse.webp";
import img5 from "../public/Images/its.jpg";
import img6 from "../public/Images/dataa.jpg";
import img7 from "../public/Images/te.webp";
import img8 from "../public/Images/arvr9.jpg";
import gifyy from "../public/Images/LandingPage.gif";
import Image from "next/image";

const home = () => {
  const content = [
    {
      serviceName: "IT Consulting Services:",
      serviceContent:
        " Our expert consultants conduct in-depth assessments of your existing IT infrastructure, aligning them with your business objectives.",
      serviceImg: img1,
      serviceLink: "/services/itconsultingservices",
    },
    {
      serviceName: "Custom Software Development:",
      serviceContent:
        " With our cutting-edge software development expertise, we create tailored solutions that cater to your unique business requirements.",
      serviceImg: img2,
      serviceLink: "/services/customsoftwaredevelopment",
    },
    {
      serviceName: "Cloud Computing Solutions:",
      serviceContent:
        "Experience the power of cloud technology through our comprehensive range of services. We facilitate seamless migration of your IT infrastructure.",
      serviceImg: img3,
      serviceLink: "/services/cloudcomputingsolutions",
    },
    {
      serviceName: "Cybersecurity Services:",
      serviceContent:
        "Safeguarding your digital assets is our top priority. Our cybersecurity solutions include thorough threat assessments, vulnerability scanning.",
      serviceImg: img4,
      serviceLink: "/services/cybersecurityservices",
    },
    {
      serviceName: "IT Support and Managed Services:",
      serviceContent:
        "Count on our dedicated support team for prompt assistance and proactive monitoring of your IT infrastructure. We handle troubleshooting.",
      serviceImg: img5,
      serviceLink: "/services/ITsupport&managedservices",
    },
    {
      serviceName: "Data Analytics and Business Intelligence:",
      serviceContent:
        "Unlock valuable insights from your data to make informed decisions. Our data analytics and business intelligence solutions employ advanced.",
      serviceImg: img6,
      serviceLink: "/services/DataAnalyticsandBusinessIntelligence",
    },
    {
      serviceName: "IT Training and Education:",
      serviceContent:
        "Stay ahead in the dynamic technology landscape with our training programs and workshops. We empower individuals...",
      serviceImg: img7,
      serviceLink: "/services/ITTrainingandEducation",
    },
    {
      serviceName: "AR/VR Services:",
      serviceContent:
        "We offer cutting-edge Augmented Reality (AR) and Virtual Reality (VR) solutions to enhance user experiences and create immersive...",
      serviceImg: img8,
      serviceLink: "/services/ArVrservices",
    },
  ];

  return (
    <main>
      <ImgSlider />
      <div className=" w-[90%] mx-auto py-5">
        <p
          className=" my-2 pb-4 text-3xl md:text-4xl lg:text-8xl font-bold"
          data-aos="fade-up"
        >
          Our Services
        </p>
        <p
          className=" w-[90%] sm:w-[80%] text-lg sm:text-2xl  pb-4"
          data-aos="fade-up"
        >
          We offer a comprehensive range of advanced IT solutions and services
          to meet the diverse technological needs of businesses and individuals.
          Our portfolio includes:
        </p>
      </div>
      <div className="py-16 lg:py-16 px-8 w-[100%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {content.map((service, index) => {
          return (
            <MainContainer
              key={index}
              serviceName={service.serviceName}
              serviceContent={service.serviceContent}
              Img={service.serviceImg}
              serviceLink={service.serviceLink}
            />
          );
        })}
      </div>

      <Ourmission />
      {/* <AnimationSlider/> */}
      <div className=" w-full h-[80vh] flex flex-col items-center justify-around">
        <span className=" text-6xl font bold text-gray-500 font-bold mb-[-20px]">
          Connect
        </span>
        <Image src={ gifyy } width={500} height={500} />
        <span className=" text-6xl font bold text-gray-500 font-bold mt-[-20px]">
          With Us
        </span>
      </div>
      <Longcard
        a={"200+"}
        b={"Customers including startups and Fortune 500 companies"}
        c={"1800+"}
        d={"Digital & Tech Experts with experience across industries"}
        e={"7+"}
        f={"Countries where we drive our technology"}
      />
    </main>
  );
};

export default home;
