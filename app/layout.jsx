"use client";
import React, {useState,useEffect } from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
import logo from "../public/Images/favicon.ico";
import { Montserrat, Poppins } from "@next/font/google";

const monts = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const RootLayout = ({ children }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const [cookie,setCookie] = useState(null);
  useEffect(()=>{
    setCookie(false)
  },[])


  const List1 = [
    {
      title: "Services",
      module: [
        {
          name: " IT-Consulting Services",
          link: " /services/itconsultingservices", 
        },
        {
          name: "Custom Software Development",
          link: "/services/customsoftwaredevelopment",
        },
        {
          name: " Cloud Computing Solutions",
          link: "/services/cloudcomputingsolutions",   
        },
        {
          name: " Cyber Security Services",
          link: " /services/cybersecurityservices",  
        },
        {
          name: " IT Support and Managed Services",
          link: "/services/ITsupport&managedservices",  
        },
        {
          name: " Data Analytics and Business Intelligence",
          link: "/services/DataAnalyticsandBusinessIntelligence", 
        },
        {
          name: "IT Training and Education Services",
          link: "/services/ITTrainingandEducation",    
        },
        {
          name: "AR/VR Services",
          link: "/services/ArVrservices",
        },
        {
          name: "AI & Generative AI",
          link: "/services/AI&GenerativeAI",
        },
      ],
    },
    {
      title: "Industries",
      module: [
        {
          name: "Banking & Finance Industry",
          link: "/industries/bankingindustry",
        },
        {
          name: "E-Commerce Industry",
          link: "/industries/ecommerceindustry",
        },
        {
          name: "Education Sector",
          link: "/industries/educationindustry",
        },
        {
          name: "Insurance Industry",
          link: "/industries/financeindustry",
        },
        {
          name: "Government Sector",
          link: "/industries/governmentindustry",
        },
        {
          name: "Healthcare Industry",
          link: "/industries/healthindustry",
        },
        {
          name: "Manufacturing Industry",
          link: "/industries/manufacturingindustry",
        },
        {
          name: "Retail Industry",
          link: "/industries/retailindustry",
        },
      ],
    },
    {
      title: "About",
      module: [
        {
          name: "About Us",
          link: "/About/AboutUs",
        },
        // {
        //   name: "Our Parteners",
        //   link: "/About/ourpartners",
        // },
        // {
        //   name: "Investors",
        //   link: "/About/investor",
        // },
        {
          name: "Contact Us",
          link: "/About/ContactUs",
        },
        // {
        //   name: "Testimonial",
        //   link: "/About/Testimonials",
        // },
      ],
    },
    {
      title: "Careers",
      module: [
        {
          name: "Career with Us",
          link: "/careers/careerwithus",
        },
      ],
    },
  ];

  return (
    <>
      <html lang="en">
      <link rel="icon" href="/Images/favicon.ico"  sizes="32x32"/>
        <body className="">
          <main className={monts.className}>
            <Navigation List1={List1} />
            <div
              className={
                cookie
                  ? "hidden"
                  : " fixed bottom-[40px] right-[40px] w-[200px] h-[200px] rounded-lg z-50 bg-gray-600 text-white text-xs p-3 flex flex-col items-center justify-around"
              }
            >
              <p>
                We use cookies to enhance your browsing experience, serve
                personalized ads or content, and analyze our traffic. By
                clicking "Accept All", you consent to our use of cookies.{" "}
                <b className=" text-blue-500 border-b-[1px] border-blue-500">
                  Cookie Policy
                </b>
              </p>
              <div className=" flex flex-row gap-2">
                <button
                  onClick={() => {
                    setCookie(true);
                  }}
                  className="bg-transparent w-fit p-1 text-xs rounded-lg border-[1px] border-white"
                >
                  Reject All
                </button>
                <button
                  onClick={() => {
                    setCookie(true);
                  }}
                  className="bg-white text-black w-fit p-1 text-xs rounded-lg"
                >
                  Accept All
                </button>
              </div>
            </div>
            {children}
            <Footer List1={List1} />
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
