"use client";
import React from "react";
import styled from "styled-components";

export default function Longcard() {
  return (
    <div className="w-full">
      <div className=" w-[85%] mx-auto py-10 my-10 rounded-xl bg-gradient-to-r from-[#0b3eb6] to-[#81ccf1] shadow-xl shadow-gray-500" data-aos="fade-up">
      <div className="flex flex-col md:flex-row justify-around items-center w-full">
        <div className=" w-1/2 md:w-1/3 mx-8 m-6 text-gray-200">
          <p className=" text-5xl md:text-6xl lg:text-8xl font-bold">
            200+{" "} <br/>
          </p>
            <span className="text-sm">Customers including startups and Fortune 500 companies</span>{" "}
        </div>
        <div className=" w-1/2 md:w-1/3  mx-8 m-6 text-gray-200">
          <p className=" text-5xl md:text-6xl lg:text-8xl font-bold">
            1800+{" "} <br/>
          </p>
            <span className="text-sm">
              Digital & Tech Experts with experience across industries
            </span>{" "}
        </div>
        <div className=" w-1/2 md:w-1/3  mx-8 m-6 text-gray-200">
          <p className=" text-5xl md:text-6xl lg:text-8xl font-bold">
            7+ <br/> 
          </p>
            <span className="text-sm">Countries where we drive our technology</span>
        </div>
      </div>
    </div>
      </div>
  );
}

// const Section = styled.section`
//   z-index: -333;
//   height: 15rem;
//   width: 90%;
//   border-radius: 20px;
//   box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset,
//     rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
//     rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
//   margin: 5rem auto;
//   background: linear-gradient(to right, #a6f2f2, #ddf181);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0 10rem;
//   position: relative;
//   overflow: hidden;
//   .info {
//     display: flex;
//     margin:auto;
//     // flex-direction: column;
//     gap: 1rem;
//     // h1 {
//     //   font-size: 3rem;
//     //   width: 60%;
//     // }
//     }
//   }
//   .screens {
//     height: 22rem;
//     position: absolute;
//     bottom: -2rem;
//     right: 1rem;
//   }
//   @media screen and (min-width: 280px) and (max-width: 1080px) {
//     flex-direction: column;
//     height: max-content;
//     gap: 4rem;
//     padding: 2rem;
//     .info {
//         flex-direction: column;
//       h1 {
//         font-size: 2rem;
//         width: 100%;
//       }
//     }
//     .screens {
//       position: initial;
//       height: 15rem;
//     }
//   }
// `;
