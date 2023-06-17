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
        // {
        //   name: "Our Leadership",
        //   link: "/About/leadership",
        // },
        {
          name: "Investors",
          link: "/About/investor",
        },
        // {
        //   name: "Privacy-Policy",
        //   link: "/About/Privacy-Policy",
        // },
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
      title: "Industries",
      module: [
        {
          name: "AR/VR Services",
          link: "/industries/ArVrservices",
        },
        {
          name: "Cloud Computing",
          link: "/industries/cloudcomputingsolutions",
        },
        {
          name: "Custom Software Development",
          link: "/industries/customsoftwaredevelopment",
        },
        {
          name: "Cyber Security Services",
          link: "/industries/cybersecurityservices",
        },
        {
          name: "Data Analytics & Business Intelligence",
          link: "/industries/DataAnalyticsandBusinessIntelligence",
        },
        {
          name: "IT-Consulting Services",
          link: "/industries/itconsultingservices",
        },
        {
          name: "IT Training and Education Services",
          link: "/industries/ITTrainingandEducation",
        },
        {
          name: "IT Support and Managed Services",
          link: "/industries/ITsupport&managedservices",
        },
      ],
    },
    {
      title: "Platforms & Products",
      module: [
        {
          name: "Dotclu4Health",
          link: "/platformandproduct/kellton4health",
        },
        {
          name: "Dotclu4NFT",
          link: "/platformandproduct/kellton4nft",
        },
        {
          name: "Dotclu4Commerce",
          link: "/platformandproduct/kellton4commerce",
        },
        {
          name: "KLGAME",
          link: "/platformandproduct/klgame",
        },
        {
          name: "tHRive",
          link: "/platformandproduct/thrive",
        },
        {
          name: "Optima",
          link: "/platformandproduct/opt",
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
            <Footer />
          </main>
        </body>
      </html>
    </>
  );
};

export default RootLayout;
