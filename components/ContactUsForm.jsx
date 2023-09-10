"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ContacUsGif from "@assets/contactus.gif";

const Form2 = () => {
  const [Name, setName] = useState("");
  const [Emails, setEmails] = useState("");
  const [Phoneno, setPhoneno] = useState("");
  const [Query, setQuery] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();

    // emailjs
    //   .sendForm(
    //     "service_um6i6oc",
    //     "template_bax6i5h",
    //     e.target,
    //     "ANMhFipwRV0Ta3ePe"
    //   )
    //   .then((res) => {
    //     console.log(res);
    //     setName("");
    //     setEmails("");
    //     setPhoneno("");
    //     setQuery("");
    //     alert("Data Sent");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    window.location.href =
      "mailto:piyyush1219@gmail.com?subject=" +
      Query +
      "&body= \n Name:" +
      Name +
      " \n Email:" +
      Emails +
      " \n Phone No.:" +
      Phoneno +
      " \n Query:" +
      Query;

      setName("");
      setPhoneno("");
      setQuery("");
      setEmails("");
  };
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
            onSubmit={sendEmail}
            className=" w-full h-full my-5 flex flex-col gap-10 items-center justify-center"
          >
            <div className="relative w-3/4">
              <input
                type="text"
                required
                name="Fullname"
                value={Name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
              />
              <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
                Full Name<span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="relative w-3/4">
              <input
                type="text"
                required
                name="Email"
                value={Emails}
                onChange={(e) => {
                  setEmails(e.target.value);
                }}
                className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
              />
              <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
                Email Address<span className="text-red-500"> *</span>
              </label>
            </div>
            <div className="w-3/4 flex flex-row gap-2">
              <div className="relative w-1/4">
                <input
                  type="text"
                  required
                  className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
                />
                <label className=" text-gray-500 absolute top-[-24px] left-[5px] text-sm">
                  Code<span className="text-red-500"> *</span>
                </label>
              </div>
              <div className="relative w-3/4">
                <input
                  type="number"
                  required
                  name="Phoneno"
                  value={Phoneno}
                  onChange={(e) => {
                    setPhoneno(e.target.value);
                  }}
                  className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
                />
                <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
                  Mobile Number<span className="text-red-500"> *</span>
                </label>
              </div>
            </div>
            <div className="relative w-3/4">
              <textarea
                name="Query"
                value={Query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                className=" text-black bg-transparent border-b-[1px] border-black w-full text-xs px-4 py-2 outline-none"
              ></textarea>
              <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
                Message<span className="text-red-500"> *</span>
              </label>
            </div>
            <div className=" flex flex-col gap-5 px-5">
              <div className=" flex flex-row items-center gap-1">
                <div>
                  <input type="checkbox" required />
                </div>
                <span className=" text-black text-xs">
                  {" "}
                  By clicking here, I state that I have read and understood the{" "}
                  <b className=" text-blue-400">
                    <Link href="/term&condition">Terms and conditions</Link>
                  </b>{" "}
                  &{" "}
                  <b className=" text-blue-400">
                    <Link href="/privacy&policy">
                      Privacy policies of the company
                    </Link>
                  </b>
                  <b className=" text-red-500"> *</b>
                </span>
              </div>
              <button className="bg-blue-500 w-fit py-3 px-3 mx-auto rounded-lg hover:bg-blue-600  transition-all duration-100 ease-in">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form2;
