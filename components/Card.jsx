"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Cards = () => {
  const router = useRouter();
  return (
    <div className=" w-full py-10 px-5">
      <div className="">
        <div className=" w-[90%] mx-auto py-5">
          <p
            className=" my-2 pb-4 text-3xl md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            Our Services
          </p>
          <p
            className=" w-[90%] sm:w-[80%] text-lg sm:text-2xl  pb-4"
            data-aos="fade-up"
          >
            We offer a comprehensive range of advanced IT solutions and services
            to meet the diverse technological needs of businesses and
            individuals. Our portfolio includes:
          </p>
        </div>
        <div className="py-16 lg:py-16 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className=" w-full h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-indigo-800 from-10% via-sky-600 via-30% to-blue-300 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/itconsultingservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Consulting Services:
            </h2>
            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              Our expert consultants conduct in-depth assessments of your
              existing IT infrastructure, aligning them with your business
              objectives. Through our customized recommendations...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-pink-800 via-pink-500 to-pink-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/customsoftwaredevelopment")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Custom Software Development:
            </h2>
            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              With our cutting-edge software development expertise, we create
              tailored solutions that cater to your unique business
              requirements. Our skilled developers...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full  h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-emerald-800 from-10% via-emerald-500 via-30% to-emerald-500 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/cloudcomputingsolutions")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cloud Computing Solutions:
            </h2>

            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              Experience the power of cloud technology through our comprehensive
              range of services. We facilitate seamless migration of your IT
              infrastructure to the cloud...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full  h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-green-800 from-10% via-green-500 via-30% to-green-400 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/cybersecurityservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cybersecurity Services:
            </h2>

            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              Safeguarding your digital assets is our top priority. Our
              cybersecurity solutions include thorough threat assessments,
              vulnerability scanning...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full  h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-pink-800 from-10% via-pink-500 via-30% to-pink-300 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/ITsupport&managedservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Support and Managed Services:
            </h2>

            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              Count on our dedicated support team for prompt assistance and
              proactive monitoring of your IT infrastructure. We handle
              troubleshooting, hardware and software issues...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full  h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-red-900 from-10% via-yellow-800 via-30% to-yellow-500 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() =>
              router.push("/services/DataAnalyticsandBusinessIntelligence")
            }
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Data Analytics and Business Intelligence:
            </h2>

            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              Unlock valuable insights from your data to make informed
              decisions. Our data analytics and business intelligence solutions
              employ advanced tools and techniques...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full  h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-red-500 from-10% via-orange-500 via-30% to-yellow-500 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/ITTrainingandEducation")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Training and Education:
            </h2>

            <p className=" text-xs sm:text-sm text-white px-3 py-2">
              Stay ahead in the dynamic technology landscape with our training
              programs and workshops. We empower individuals and organizations
              with knowledge and skills in software development...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>

          <div
            className=" w-full h-[40%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-gradient-to-r from-rose-900 from-10% via-rose-700 via-30% to-rose-500 to-90% hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
            onClick={() => router.push("/services/ArVrservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              AR/VR Services:
            </h2>

            <p className=" text-xs sm:text-sm text-white lg:px-8 px-3 py-2">
              We offer cutting-edge Augmented Reality (AR) and Virtual Reality
              (VR) solutions to enhance user experiences and create immersive
              digital environments...
            </p>
            <span className=" text-xs sm:text-sm text-white px-3 py-2">
              {" "}
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
