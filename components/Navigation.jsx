"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DropDown from "./DropDown";
import Accordions from "./Accordians";
import DropDown2 from "./DropDown2";
import Accordian2 from "./Accordian2";

const Navbar = () => {
  const [navOpen, setnavOpen] = useState(false);
  const [scrolly, setScroll] = useState(0);
  const [lastScroll, setLast] = useState(0);

  const navRef = useRef();

  const navColour = () => {
    const nav = document.getElementById("nav");
    if (scrolly > 100) {
      nav.style.background = "#1A374D";
    } else {
      nav.style.background = "transparent";
    }
  };

  const navPos = () => {
    const nav = document.getElementById("nav");

    if (scrolly <= 0) {
      nav.style.transform = "translate3d(0,-100%,0)";
    }

    if (scrolly > lastScroll) {
      nav.style.transform = "translate3d(0,-100%,0)";
    } else {
      nav.style.transform = "translate3d(0,0,0)";
    }

    setLast(scrolly);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      var y = window.scrollY;
      setScroll(y);
    });
  });

  useEffect(() => {
    window.addEventListener("scroll", navColour);
    window.addEventListener("scroll", navPos);
  });

  const [List1, setList1] = useState([
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
          name: "Testimonial",
          link: "/services/Testimonials",
        },
        {
          name: "Testimonial",
          link: "/services/Testimonials",
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
          name: "Our Leadership",
          link: "/About/leadership",
        },
        {
          name: "Investors",
          link: "/About/investor",
        },
        {
          name: "Privacy-Policy",
          link: "/About/Privacy-Policy",
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
      title: "Industries",
      module: [
        {
          name: "Fintech,Banking,Financial Sevices",
          link: "/industries/fbfs",
        },
        {
          name: "Retail,E-Commerce & Distribution",
          link: "/industries/recd",
        },
        {
          name: "Non-Profit,Government & Education",
          link: "/industries/npge",
        },
        {
          name: "Travel,Logistics & Hospitality",
          link: "/industries/tlh",
        },
        {
          name: "HiTech,Saas,ISV & Communications",
          link: "/industries/hsic",
        },
        {
          name: "Oil,Gas & Mining",
          link: "/industries/oag",
        },
        {
          name: "Energy & Utilities",
          link: "/industries/eau",
        },
      ],
    },
    {
      title: "Platforms & Products",
      module: [
        {
          name: "Kellton4Health",
          link: "/platformandproduct/kellton4health",
        },
        {
          name: "Kellton4NFT",
          link: "/platformandproduct/kellton4nft",
        },
        {
          name: "Kellton4Commerce",
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
        // {
        //   name: "Life At Kellton",
        //   link: "/careers/lifehere",
        // },
        // {
        //   name: "Jobs",
        //   link: "/careers/jobs",
        // },
      ],
    },
  ]);

  const handelnav = () => {
    setnavOpen(!navOpen);
  };
  return (
    <header
      id="nav"
      className={` bg-[${navOpen?"#1A374D":"transparent"}] z-50 h-[80px] w-screen flex items-center justify-center md:gap-0 lg:gap-5 fixed top-0 left-0  text-white transition-colors duration-300 `}
    >
      <div className=" px-3 lg:px-6">
        <span>
          <Link href="/" className=" text-3xl sm:text-5xl ">
            <b>.</b>
            <span className=" text-red-400 font-bold">DOT</span>
            <span className=" text-red-400">cLU</span>
          </Link>
        </span>
      </div>
      <nav className=" flex w-[100%] justify-center items-center lg:px-24">
        <ul className=" hidden md:flex md:items-center md:top-0 md:left-0 md:w-[100%] md:text-xs lg:text-sm ">
          {/* <li className=" my-3 py-3 min-w-[100px] hover:text-blue-300  transition-all duration-300 cursor-pointer text-center">
              <DropDown2 title="Services" />
            </li> */}
          {List1.map((item, index) => {
            return (
              <li
                key={index}
                className=" my-3 py-3 min-w-[100px] hover:text-blue-300 transition-all duration-300 cursor-pointer text-center"
              >
                <DropDown title={item.title} list1={item.module} />
              </li>
            );
          })}
        </ul>
        <ul
          ref={navRef}
          className={
            navOpen
              ? " z-50 py-3 bg-[#1A374D] text-white w-[60%] min-h-screen absolute overflow-y-auto top-[80px] left-0 ease-in duration-500  md:hidden text-center font-bold font-customised1"
              : " z-50 bg-[#1A374D] text-white w-[60%] h-screen absolute top-[80px] left-[-150%] ease-in duration-500  text-center font-bold font-customised1"
          }
        >
          {/* <li className=" mx-auto my-2 py-3 px-4 w-fit ">
          </li>
          <li className=" mx-auto w-full ">
            <Accordian2/>
          </li> */}
          <Accordions />
        </ul>
        <div
          onClick={handelnav}
          className=" cursor-pointer flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-0 mr-5 sm:mr-10 md:hidden"
        >
          <i>
            {!navOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
