import React from "react";
import Image from "next/image";
import Link from "next/link";

const MainContainer = ({ serviceName, serviceContent, Img, serviceLink }) => {
  return (
    <>
      <div
        className="  mx-auto  flex flex-col items-center justify-center shadow-xl hover:shadow-gray-500"
        data-aos="fade-up"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto">
            <div className=" group h-[500px] sm:h-[400px] w-full relative">
              <div className="  group-hover:blur-sm h-[40%] transition-all duration-300">
                <Image
                  width={1000}
                  height={1000}
                  className=" h-full object-cover"
                  src={Img}
                  alt="a"
                />
              </div>
              <div class=" absolute top-[20%] translate-y-[-20%] left-[50%] translate-x-[-50%] z-10 hidden group-hover:block ">
                <Link
                  href={serviceLink}
                  className=" px-5 py-3 text-black font-bold bg-white  border-[1px] border-solid border-white rounded-md"
                >
                  {" "}
                  Read more{" "}
                </Link>
              </div>
              <div className=" border-[1px]  border-solid   p-5 h-[60%]  w-full relative transition-all duration-300">
                <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
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
