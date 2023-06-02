"use client";
import React, { useEffect, useRef, useState } from "react";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropHelper from "./DropHelper";

const DropDown2 = ({ title }) => {
  const [IsOpen, setIsOpen] = useState(false);
  const divRef = useRef();
  const [list1, setList1] = useState([
    {
      title: "Digital Experience",
      rootlink:"/services/digitalexperience",
      module: [
        {
          name: "Product Strategy & Consulting",
          link: "/services/digitalexperience/productstrategy",
        },
        {
          name: "Product Design",
          link: "/services/digitalexperience/productdesign",
        },
        {
          name: "Product Management",
          link: "/services/digitalexperience/productmanagement",
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
      rootlink:"/service/digitalexperience",
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
      rootlink:"/service/digitalexperience",
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
      rootlink:"/service/digitalexperience",
      module: [
        {
          name: "Life At Kellton",
          link: "/careers/lifehere",
        },
        {
          name: "Jobs",
          link: "/careers/jobs",
        },
      ],
    },
  ]);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (e.target !== divRef.current) {
        setIsOpen(false);
      }
    });
  });

  return (
    <div className=" w-full">
      <button
        ref={divRef}
        onClick={() => setIsOpen(!IsOpen)}
        className=" text-xs w-fit"
      >
        {title}
      </button>
      {IsOpen ? (
        <ArrowDropUpIcon fontSize="small" />
      ) : (
        <ArrowDropDownIcon fontSize="small" />
      )}

      {IsOpen && (
        <div className=" text-sm z-50 w-screen py-5 grid grid-cols-3 gap-2 h-fit bg-gray-100 rounded-md text-[rgba(16,44,81,255)] absolute md:top-[85px] left-0  opacity-100  transition-all duration-300">
          {list1.map((item, index) => {
            return (
              <div key={index} className="  py-3">
                <DropHelper title={item.title} rootlink={item.rootlink} module={item.module} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropDown2;
