import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainContainer = ({ serviceName, serviceContent, Img, serviceLink }) => {
  return (
    <>
  
      <div
        className=" group mx-auto  flex flex-col items-center justify-center shadow-xl shadow-gray-500"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto">
            <div className=" h-[500px] sm:h-[400px] w-full">
              <div className=" group-hover:opacity-70 group-hover:backdrop-blur-xl h-[40%] transition-all duration-300">
                <Image
                  width={1000}
                  height={1000}
                  className=" -z-10 h-full object-cover"
                  src={Img}
                  alt="a"
                />
                <Link href={serviceLink} className=" hidden px-5 py-3 group-hover:block  text-white bg-transparent absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] border-[1px] border-solid border-white rounded-md">
                  {" "}
                  Read more{" "}
                </Link>
              </div>
              <div className=" border-[1px] border-black border-solid group-hover:bg-black  p-5 h-[60%] bg-gray-100 w-full relative transition-all duration-300">
                <h3 className=" group-hover:text-white text-lg font-semibold text-center leading-8 tracking-tight text-black">
                  {serviceName}
                </h3>
                <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                  {serviceContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
