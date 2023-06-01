"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";
import Slider from "react-slick";



import Slide1 from "@assets/img1.jpg";
import Slide2 from "@assets/hero2.webp";
import Slide3 from "@assets/hero3.jpg";
import Slide4 from "@assets/hero4.jpg";

import Link from 'next/link';
import Image from 'next/image';


const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const Wrap = styled.div`
    cursor: pointer;
    height: 80dvh;
    img {
      //border: 4px solid black;
      width: 100%;
      height: 100%;

      transition-duration: 500ms;
      &:hover {
        border: 4px solid rgba (249, 249, 249, 0.8);
      }
    }
  `;

  const Carousel = styled(Slider)`

    .slick-list {
      overflow: hidden;
    }
    ul li button {
      &:before {
        font-size: 10px;
        color: ${(props) => props.theme.white};
      }
    }
    li.slick-active button:before {
      color: ${(props) => props.theme.white};
    }
    button {
      z-index: 1;
    }
    .slick-dots {
      bottom: 25px;
      padding-right: 20px;
      
    }
    .slick-dots li button:before {
      font-size: 10px;
    }

    .slick-next {
      right: 10px;
    }
    .slick-prev {
      left: 10px;
    }
    .slick-next{
      
      padding:50px
    }
    .slick-next:before {
      
    }
    .slick-prev:before {
    }
  `;

  return (
    <div className="mt-[85px]">
      <Carousel {...settings} className=" -z-0">
        <Wrap className="relative">
          <div className=" absolute text-white w-full text-left p-5">
            <div className="lg:p-24">
              <h1 className=" text-4xl my-5  font-extrabold">
                Infinite Possibilities With Technology
              </h1>
              <p className=" text-xs md:text-sm">
                Any challenges in digital and involving use of technology?We can help you out
              </p>
            <Link href="/">
              <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
                Let's Talk
              </button>
            </Link>
            </div>
          </div>
        
          <Image src={Slide1} alt="badag" />
        </Wrap>
        
        
        <Wrap className=" relative">
          <div className=" absolute text-white w-full text-left p-5">
            <div className="lg:p-24">
              <h1 className=" text-4xl my-5  font-extrabold">Technology Agnostic</h1>
              <p className=" text-xs md:text-sm">We dont focus on technologies, we focus on solution whatever technology it takes</p>
            <Link href="/">
              <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
                Let's Talk
              </button>
            </Link>
            </div>
          </div>
          <Image src={Slide2} />
        </Wrap>

        <Wrap className="relative">
          <div className=" absolute text-white w-full text-left p-5">
            <div className="lg:p-24">
              <h1 className=" text-3xl my-5  font-extrabold">Kellton recognised as Leader in</h1>
              <h1 className=" text-3xl my-5  font-extrabold">the Zinnov Zones ER&D report,2022</h1>
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
          </div>
          <Image src={Slide3} alt="badging" />
        </Wrap>

        <Wrap className="relative">
          <div className=" absolute text-white w-full text-left p-5">
            <div className="lg:p-24">
              <h1 className=" text-3xl my-5 font-extrabold">
                Webby 2023 Honoree 
              </h1>
              <p className=" text-xs md:text-sm">
                Globally recognised for Apps,dApps and Data Management
              </p>
              <p className=" text-xs md:text-sm">
                Oscar Of Internet
              </p>
            <Link href="/">
              <button className=" my-2 md:my-5 text-white bg-transparent border border-white  px-2 md:px-5 py-2 rounded-md">
                Let's Talk
              </button>
            </Link>
            </div>
          </div>
          <Image src={Slide4} alt="scale" />
        </Wrap>

      </Carousel>
    </div>
  );
};

export default ImgSlider;
