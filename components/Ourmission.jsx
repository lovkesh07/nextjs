"use client";
import React from "react";
import Img1 from "@assets/eau.webp";
import Image from "next/image";
import { useRouter } from "next/navigation";


const Ourmission = () => {
  const router = useRouter();
  return (
    <>
      <div className=" p-4 lg:p-16">
        <div className="mx-auto  lg:p-16">
          <p className=" text-3xl md:text-4xl lg:text-8xl font-bold" data-aos="fade-up"> Our mission</p>
          <p className=" text-2xl py-5" data-aos="fade-up">
            To be the trusted digital partner and drive transformational
            outcomes for our customers, and empower our employees to achieve
            their full potential.
          </p>
        </div>
        <div className=" w-full h-[50vh] bg-[url('../public/Images/LandingPage.gif')] bg-fixed bg-top bg-no-repeat flex items-center justify-center"></div>
        <div className="mx-auto my-12 lg:p-16 ">
          <p className="text-3xl md:text-4xl lg:text-8xl font-bold" data-aos="fade-up">Industries we serve</p>
          <p className="text-2xl py-5 " data-aos="fade-up">
            We revolutionalize industries with the power of tech, to seamlessly
            weave a tapestry of innovation, efficiency, and growth.{" "}
          </p>
        </div>

        <div class="grid grid-cols-1 md:p-8 gap-x-1 gap-y-1  md:grid-cols-2">
        <div className=" h-screen w-full bg-[url('../public/Images/eau.webp')] bg-fixed bg-center md:bg-left bg-no-repeat">
            {/* <Image
              src={Img1}
              alt="badag"
              width={1200}
              height={1200}
              className=" w-full h-[100vh] rounded-lg"
            /> */}
          </div>
          <div className=" p-2 lg:p-12">
            <div className=" text-slate-700 ">
              <ul className="leading-8 my-2  ">
                <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up"  onClick={() => router.push("/industries/ArVrservices")} >
                  <h1 className="font-medium text-2xl lg:text-3xl cursor-pointer">
                  AR/VR Services <br />
                  </h1>
                </li>
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/cloudcomputingsolutions")}>
                  <h1 className="font-medium text-2xl lg:text-3xl cursor-pointer">
                  Cloud Computing <br />
                  </h1>
                </li>
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/customsoftwaredevelopment")}>
                  <h1 className="font-medium text-2xl lg:text-3xl cursor-pointer">
                  Custom Software Development <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/cybersecurityservices")}>
                  <h1 className=" font-medium text-2xl lg:text-3xl cursor-pointer">
                  Cyber Security Services <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/DataAnalyticsandBusinessIntelligence")}>
                  <h1 className="font-medium text-2xl lg:text-3xl cursor-pointer">
                  Data Analytics & Business Intelligence <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/itconsultingservices")}>
                  <h1 className="font-medium text-2xl lg:text-3xl cursor-pointer">
                  IT-Consulting Services<br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/ITTrainingandEducation")}>
                  <h1 className=" font-medium text-2xl lg:text-3xl cursor-pointer">
                  IT Training and Education Services <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black" data-aos="fade-up" onClick={() => router.push("/industries/ITsupport&managedservices")}>
                  <h1 className=" font-medium text-2xl lg:text-3xl cursor-pointer">
                  IT Support and Managed Services<br />
                  </h1>
                </li>

              </ul>
            </div>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Ourmission;
