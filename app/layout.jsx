"use client";
import React, { useEffect } from "react";
import Footer from "@components/Footer";
import Navigation from "@components/Navigation";
import "@styles/global.css";
import AOS from "aos";
import "aos/dist/aos.css";
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

  const List1 = [
    {
      title: "Services",
      module: [
        {
          name: "Cloud Computing Solutions",
          link: "/services/cloudcomputingsolutions",
        },
        {
          name: "Custom Software Development",
          link: "/services/customsoftwaredevelopment",
        },
        {
          name: "Cyber Security Services",
          link: "/services/cybersecurityservices",
        },
        {
          name: "Data Analytics & Business Intelligence",
          link: "/services/DataAnalyticsandBusinessIntelligence",
        },
        {
          name: "IT-Consulting Services",
          link: "/services/itconsultingservices",
        },
        {
          name: "IT Training and Education Services",
          link: "/services/ITTrainingandEducation",
        },
        {
          name: "IT Support and Managed Services",
          link: "/services/ITsupport&managedservices",
        },
        {
          name: "AR/VR Services",
          link: "/services/ArVrservices",
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
        {
          name: "Our Parteners",
          link: "/About/ourpartners",
        },
        {
          name: "Investors",
          link: "/About/investor",
        },
        {
          name: "Contact Us",
          link: "/About/ContactUs",
        },
        {
          name: "Testimonial",
          link: "/About/Testimonials",
        },
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
        <body className="">
          <main className={monts.className}>
            <Navigation List1={List1} />
            {children}
            <Footer List1={List1} />
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
