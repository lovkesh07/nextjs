"use client";
import React, { useEffect, useRef, useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DropDown from "./DropDown";
import Accordions from "./Accordians";
import { useRouter } from "next/navigation";
import CancelIcon from "@mui/icons-material/Cancel";

const Navbar = ({ List1 }) => {
  const router = useRouter();

  const [navOpen, setnavOpen] = useState(false);
  const [showForm, setshowForm] = useState(false);
  const navRef = useRef();
  const fromRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!fromRef.current.contains(e.target)) setshowForm(false);
    };

    document.addEventListener("mousedown", handler);
  });

  useEffect(() => {
    const handler = (e) => {
      if (!navRef.current.contains(e.target)) setnavOpen(false);
    };

    document.addEventListener("mousedown", handler);
  });

  const handleForm = () => {
    setshowForm(true);
  };

  const hideForm = () => {
    setshowForm(false);
  };

  const handelnav = () => {
    setnavOpen(!navOpen);
  };

  const setnavFalse = () => {
    console.warn("nav-change");
    return setnavOpen(false);
  };
  return (
    <header
      id="nav"
      className=" bg-[#000000]  z-50 h-[80px] w-screen flex items-center justify-center md:gap-0 lg:gap-5 fixed top-0 left-0  text-white"
    >
      <div
        ref={fromRef}
        className={
          showForm
            ? ` absolute top-[100px] opacity-100 left-[50%] translate-x-[-50%] w-[90vw] sm:w-[70vw] pb-5 bg-gray-200 z-50 transition-all duration-300 ease-in`
            : ` absolute top-[-100vh] opacity-0 left-[50%] translate-x-[-50%] w-[90vw] h-[80vh] bg-gray-200 z-50 transition-all duration-300 ease-in`
        }
      >
        <div className=" w-full p-8 flex flex-row items-center justify-between">
          <h1 className=" text-left text-gray-500 tracking-widest text-xl">
            write to us
          </h1>
          <CancelIcon
            onClick={hideForm}
            className="text-black cursor-pointer"
          />
        </div>
        <form className=" w-full h-full my-5 flex flex-col gap-10 items-center justify-center">
          <div className="relative w-3/4">
            <input
              type="text"
              required
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
                className=" text-black w-full bg-transparent outline-none border-b-[1px] border-black"
              />
              <label className=" absolute top-[-24px] left-[5px] text-gray-500 text-sm">
                Mobile Number<span className="text-red-500"> *</span>
              </label>
            </div>
          </div>
          <div className="relative w-3/4">
            <textarea
              className=" text-black bg-transparent border-b-[1px] border-black w-full text-xs px-4 py-2 outline-none"
              required
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
                <b className=" text-blue-400">Terms and conditions</b> &{" "}
                <b className=" text-blue-400">
                  Privacy policies of the company
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
      <div className=" px-3 lg:px-6">
        <span>
          <Link href="/" className=" text-3xl sm:text-5xl ">
            <b>.</b>
            <span className=" text-red-400 font-bold">DOT</span>
            <span className=" text-red-400">cLU</span>
          </Link>
        </span>
      </div>
      <nav className=" flex w-[100%] justify-start md:justify-around items-center md:px-16">
        <ul className=" hidden md:flex md:items-center md:top-0 md:left-0 md:w-[100%] md:text-xs lg:text-sm ">
          {List1.map((item, index) => {
            return (
              <li
                key={index}
                className=" my-3 py-3 min-w-[100px] hover:text-blue-300 transition-all duration-300 cursor-pointer text-center"
              >
                <DropDown title={item.title} list1={item.module} />
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block w-[100px] px-2 py-3 border-white border-[1px] text-xs  cursor-pointer">
          <button onClick={handleForm} className="w-full">
            Contact Us
          </button>
        </div>
        <ul
          ref={navRef}
          className={
            navOpen
              ? " z-40 py-3 bg-black text-white w-[60%] min-h-screen absolute overflow-y-auto top-[80px] left-0 ease-in duration-500  md:hidden text-center font-bold font-customised1"
              : " z-40 bg-black text-white w-[60%] h-screen absolute top-[80px] left-[-150%] ease-in duration-500  text-center font-bold font-customised1"
          }
        >
          <Accordions
            List1={List1}
            navOpen={navOpen}
            setnavFalse={setnavFalse}
          />
          <li className=" w-3/4 mx-auto mt-10 rounded-md py-3 border-[1px] border-solid border-white">
            <button onClick={handleForm}>Contact Us</button>
          </li>
        </ul>
        <div
          onClick={handelnav}
          className=" cursor-pointer flex items-center justify-center absolute top-[50%] translate-y-[-50%] right-0 mr-5 sm:mr-10 md:hidden"
        >
          <i>
            {!navOpen ? (
              <MenuIcon fontSize="large" />
            ) : (
              <CloseIcon fontSize="large" />
            )}
          </i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
