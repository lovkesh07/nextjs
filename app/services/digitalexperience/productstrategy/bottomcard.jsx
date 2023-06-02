import React from "react";
import Image from "next/image";
import Slide1 from "@assets/img1.jpg";

const bottomcard = () => {
  return (
    <>
      <section class="md:h-full flex items-center  bg-[#1A374D]">
        <div class="container px-5 py-24 mx-auto">
          <div class="text-center mb-12">
            <h5 class="text-base md:text-lg text-slate-200 mb-1">
            Related posts
            </h5>
            <h1 class="text-4xl md:text-6xl text-gray-500 font-semibold">
            Want to know more?
            </h1>
          </div>

          <div class="flex flex-wrap -m-4">

            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-100 border-opacity-20 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={Slide1}
                  alt="blog"
                />
                <div class="p-6 hover:bg-[#406882] hover:text-white transition duration-300 ease-in">
                  <h2 class="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 class="text-2xl font-semibold mb-3">
                  How to use stakeholder mapping to build better products, faster?
                  </h1>
                  
                  <div class="flex items-center flex-wrap ">
                    <a href="#" class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                   
                    
                  </div>
                </div>
              </div>
            </div>

            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-100 border-opacity-20 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={Slide1}
                  alt="blog"
                />
                <div class="p-6 hover:bg-[#406882] hover:text-white transition duration-300 ease-in">
                  <h2 class="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 class="text-2xl font-semibold mb-3">
                  How to write an effective product requirements document?
                  </h1>
                  

                  <div class="flex items-center flex-wrap ">
                    <a href="#" class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                    
                    
                  </div>

                </div>
              </div>
            </div>

            <div class="p-4 sm:w-1/2 lg:w-1/3">
              <div class="h-full border-2 border-gray-100 border-opacity-20 rounded-lg overflow-hidden">
                <Image
                  class="lg:h-72 md:h-48 w-full object-cover object-center"
                  src={Slide1}
                  alt="blog"
                />{" "}
                <div class="p-6 hover:bg-[#406882] hover:text-white transition duration-300 ease-in">
                  <h2 class="text-base font-medium text-indigo-300 mb-1">
                    October 29, 2021
                  </h2>
                  <h1 class="text-2xl font-semibold mb-3">What is product discovery, why it matters, and how to do it right?</h1>
                  
                  <div class="flex items-center flex-wrap ">
                    <a href="#" class="text-indigo-300 inline-flex items-center md:mb-2 lg:mb-0">
                      Read More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>

                    

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default bottomcard;
