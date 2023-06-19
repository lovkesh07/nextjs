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
    // tl.fromTo(
    //   ".imgcontainer",
    //   {  opacity: 0,left:"-100vw" },
    //   {
    //     ease: Power4.easeInOut,
    //     duration: 3.5,
    //     width: "100%",
    //     opacity: 1,
    //     left:0,
    //     stagger: {
    //       each:3.5,
    //       repeat:-1,
    //       repeatDelay:11.5
    //     },
    //   },"a"
    // );
    // tl.to(
    //   ".imgcontainer",
    //   {
    //     delay:3.5,
    //     ease: Power4.easeInOut,
    //     duration: 3.5,
    //     // width: "100%",
    //     opacity: 1,
    //     left:"100vw",
    //     stagger: {
    //       each:3.5,
    //       repeat:-1,
    //       repeatDelay:11.5
    //     },
    //   },"a"
    // );
    tl.fromTo(
      ".text",
      { left: "-200vw" },
      {
        ease: Power4.easeInOut,
        duration: 3.5,
        left: 0,
        stagger: {
          each: 3.5,
          repeat: -1,
          repeatDelay: 11.5,
        },
      },
      "a"
    );
    tl.to(
      ".text",
      {
        delay: 3.5,
        ease: Power4.easeInOut,
        duration: 3.5,
        left: "200vw",
        stagger: {
          each: 3.5,
          repeat: -1,
          repeatDelay: 11.5,
        },
      },
      "a"
    );
    tl.fromTo(
      ".slider",
      { opacity: 0.5 },
      {
        ease: Power4.easeInOut,
        duration: 3.5,
        opacity: 1,
        stagger: {
          each: 3.5,
          repeat: -1,
          repeatDelay: 11.5,
        },
      },
      "a"
    );
    tl.to(
      ".slider",
      {
        delay: 3.5,
        ease: Power4.easeInOut,
        duration: 3.5,
        opacity: 0.5,
        stagger: {
          each: 3.5,
          repeat: -1,
          repeatDelay: 11.5,
        },
      },
      "a"
    );
  });
  return (
    <div className=" h-[50vh] w-full bg-gray-200 px-5 flex justify-center items-center">
      <div className=" relative w-full lg:w-[80%] bg-white h-[90%] rounded-lg border-[1px] border-black border-solid overflow-hiddens overflow-hidden ">
        <div className=" z-20 w-full text-black px-5">
          <div className=" text w-full absolute top-[50%] translate-y-[-50%] z-20">
            <h1 className=" text-xl sm:text-4xl md:text-6xl font-extrabold">
              Infinite Possibilities With Technology
            </h1>
            <p className=" text-xs md:text-sm">
              Any challenges in digital and involving use of technology?We can
              help you out
            </p>
          </div>
          <div className=" text w-full absolute top-[50%] translate-y-[-50%] z-20">
            <h1 className=" text-xl sm:text-4xl md:text-6xl font-extrabold">
              Technology Agnostic
            </h1>
            <p className=" text-xs md:text-sm">
              We dont focus on technologies, we focus on solution whatever
              technology it takes
            </p>
          </div>
          <div className=" text w-full absolute top-[50%] translate-y-[-50%] z-20">
            <h1 className=" text-xl sm:text-4xl my-5 md:text-6xl font-extrabold">
              Dotclu recognised as Leader in
            </h1>
            <h1 className=" text-lg sm:text-3xl my-5  font-extrabold">
              the Zinnov Zones ER&D report,2022
            </h1>
            <p className=" text-xs md:text-sm">
              Adjust The Customer's IT Infrastructure To New,Ever Growing
              Business & Technical Requirements
            </p>
          </div>
          <div className=" text w-full absolute top-[50%] translate-y-[-50%] z-20">
            <h1 className=" text-xl sm:text-4xl my-5 md:text-6xl font-extrabold">
              Webby 2023 Honoree
            </h1>
            <p className=" text-xs md:text-sm">
              Globally recognised for Apps,dApps and Data Management
            </p>
            <p className=" text-xs md:text-sm">Oscar Of Internet</p>
          </div>
        </div>
        <div className=" w-fit h-fit flex flex-row gap-[2px] absolute bottom-[10px] left-[50%] translate-x-[-50%]">
            <div className="slider w-[30px] h-[5px] bg-black"></div>
            <div className="slider w-[30px] h-[5px] bg-black"></div>
            <div className="slider w-[30px] h-[5px] bg-black"></div>
            <div className="slider w-[30px] h-[5px] bg-black"></div>
        </div>
        {/* <div className=" imgcontainer w-full h-full absolute">
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
        </div> */}
      </div>
    </div>
  );
};

export default AnimationSlider;
