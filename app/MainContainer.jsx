import React from "react";
import Lovkesh from "@assets/img1.jpg";
import Hardik from "@assets/hero2.webp";
import Abhinav from "@assets/hero3.jpg";
import Ankur from "@assets/hero4.jpg";
import Image from "next/image";
import Link from "next/link";

const MainContainer = ({ serviceName, serviceContent, Img, serviceLink }) => {
  return (
    <>
      {/* Team section */}

      <div
        className=" group mx-auto border-[1px] border-black border-solid flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto">
            <div className=" h-[600px] w-full">
              <div className=" group-hover:backdrop-filter group-hover:backdrop-blur-md group-hover:opacity-50 group-hover:bg-white h-[40%] transition-all duration-200">
                <Image
                  width={1000}
                  height={1000}
                  className=" h-full object-cover"
                  src={Img}
                  alt="a"
                />
                <Link href={serviceLink} className=" hidden px-5 py-3 group-hover:block  text-white bg-transparent absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] border-[1px] border-solid border-white rounded-md">
                  {" "}
                  Read more{" "}
                </Link>
              </div>
              <div className=" p-5 h-[60%] bg-gray-100 w-full relative">
                <h3 className="text-lg font-semibold text-center leading-8 tracking-tight text-black">
                  {serviceName}
                </h3>
                <p className="text-sm leading-6 text-gray-500 py-5">
                  {serviceContent}
                </p>
                {/* <Link href={serviceLink} className=" py-5 text-black absolute bottom-[0px] right-[20px]">
                  {" "}
                  Read more{" "}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
