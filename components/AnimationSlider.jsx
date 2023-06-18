"use client";
import React from "react";
import Walli1 from "../assets/walli1.jpg";
import Walli2 from "../assets/walli2.jpg";
import Slide3 from "@assets/hero3.jpg";
import Slide4 from "@assets/hero4.jpg";
import Image from "next/image";
import Link from "next/link";
import { gsap, Power4 } from "gsap";
import { useEffect } from "react";
const AnimationSlider = () => {
  var tl = gsap.timeline({ repeat: -1 });
  useEffect(() => {
    tl.fromTo(
      ".imgcontainer",
      { width: "0%", opacity: 0 },
      {
        ease: Power4.easeInOut,
        duration: 2,
        width: "100%",
        opacity: 1,
        stagger: 2,
      },"a"
    );
    tl.fromTo(
      ".text",
      {width:0, opacity: 0, top:"-100%" },
      {
        ease: Power4.easeInOut,
        duration: 2,
        width:0,
        top:0,
        opacity: 1,
        stagger: 2,
      },"a"
    );
  });
  return (
    <div className=" h-screen bg-gray-200 flex justify-center items-center">
      <div className=" relative w-[95%] sm:w-[70%] h-[80%]">
        <div className=" overflow-hidden absolute bottom-[20%] left-[0%] z-20 bg-red-800 text-white px-5">
            <div className=" text absolute z-20">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Infinite Possibilities With Technology
              </h1>
              <p className=" text-xs md:text-sm">
                Any challenges in digital and involving use of technology?We can
                help you out
              </p>
              <Link href="/">
                <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
                  Let's Talk
                </button>
              </Link>
            </div>
            <div className=" text absolute z-20">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Technology Agnostic
              </h1>
              <p className=" text-xs md:text-sm">
                We dont focus on technologies, we focus on solution whatever
                technology it takes
              </p>
              <Link href="/">
                <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
                  Let's Talk
                </button>
              </Link>
            </div>
            <div className=" text absolute z-20">
              <h1 className=" text-2xl sm:text-4xl my-5 md:text-6xl font-extrabold">
                Dotclu recognised as Leader in
              </h1>
              <h1 className=" text-3xl my-5  font-extrabold">
                the Zinnov Zones ER&D report,2022
              </h1>
              <p className=" text-xs md:text-sm">
                Adjust The Customer's IT Infrastructure To New,Ever Growing
                Business & Technical Requirements
              </p>
              <Link href="/">
                <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
                  Lets's Talk
                </button>
              </Link>
            </div>
            <div className=" text absolute z-20">
              <h1 className=" text-5xl my-5 md:text-6xl font-extrabold">
                Webby 2023 Honoree
              </h1>
              <p className=" text-xs md:text-sm">
                Globally recognised for Apps,dApps and Data Management
              </p>
              <p className=" text-xs md:text-sm">Oscar Of Internet</p>
              <Link href="/">
                <button className=" my-2 md:my-5 text-white bg-transparent border border-white  px-2 md:px-5 py-2 rounded-md">
                  Let's Talk
                </button>
              </Link>
            </div>
        </div>
        <div className=" imgcontainer w-[0%] opacity-0 h-full absolute">
          <Image src={Walli1} className=" h-full" />
        </div>
        <div className=" imgcontainer w-full h-full absolute">
          <Image src={Walli2} className=" h-full" />
        </div>
        <div className=" imgcontainer w-full h-full absolute">
          <Image src={Slide3} className=" h-full" />
        </div>
        <div className=" imgcontainer w-full h-full absolute">
          <Image src={Slide4} className=" h-full" />
        </div>
      </div>
    </div>
  );
};

export default AnimationSlider;
