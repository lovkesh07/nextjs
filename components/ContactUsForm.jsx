import React from "react";
import Image from "next/image";
import ContacUsGif from "@assets/contactus.gif";

const Form2 = () => {
  return (
    <div className="w-[95%] min-h-screen mx-auto flex justify-center items-center py-10 ">
      <div className=" w-[100%] py-5 bg-gray-200 sm:bg-white rounded-md flex flex-col sm:flex-row">
        <div className=" w-full sm:w-1/2 flex flex-col justify-around items-center sm:min-h-[100%]">
          <h1 className="p-6 mt-1 text-3xl sm:text-5xl font-bold tracking-wide text-gray-600">
            Let’s Talk <br />
            <span className="mt-1  text-2xl  tracking-wide text-gray-400">
              Fill in your details and our team will get in touch.
            </span>
          </h1>

          <Image src={ContacUsGif} className="hidden sm:block max-w-[300px]" />
        </div>
        <div className=" w-full h-fit py-5 sm:py-10 sm:mx-5 sm:w-1/2 sm:min-h-[100%] flex flex-col items-center justify-center bg-gray-200 rounded-md">
          <form
            action=""
            className=" w-[90%] sm:min-h-[100%] flex flex-col items-center justify-center gap-2 sm:gap-4"
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              className=" ring mb-[3px] ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="email"
              placeholder="email"
              name="user_email"
              className=" ring mb-[3px] ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />
            <input
              type="number"
              placeholder="phone number"
              name="user_contact"
              className=" ring mb-[3px] ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
            />            
            <textarea
              name="message"
              placeholder="query"
              className="ring mb-[3px] ring-white w-full text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"
              required
            ></textarea>
            <button className=" 3/4 mt-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  hover:border-black  ">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
