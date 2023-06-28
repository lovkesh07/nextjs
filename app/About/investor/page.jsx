import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="">
      <div className="relative ">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold">
            Investor Information
          </h1>
          <p className="text-lg py-2">Know who’s behind our company</p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24  py-4  ">
        <p className="text-2xl lg:text-6xl py-5 font-medium pr-2">
          {" "}
          Investor Information
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 lg:text-justify border-b-[0.1px] py-4 lg:py-16 border-solid border-slate-700" data-aos="fade-up">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Dotclu was founded in 2009 by a team of technology enthusiasts with
            a wealth of knowledge, talent, and ambition acquired from over a
            century of collective experience. Since then, they have built us up,
            led us to an IPO, and grown our company into an international
            workforce of 1,800+ across Asia, North America, and Europe. In these
            ten years, we have been lucky to work with some of the biggest
            brands in the world, from start-ups at incubation to global giants
            and the top of the Fortune 500 list. You will find all the investor
            information on Dotclu that you might need here. This includes share
            prices, company policies, corporate governance, disclosures,
            financials, investor services, and reports and filings.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 ">
        <div className="">
          <h1 className="text-xl lg:text-2xl py-2  pr-2">Explore</h1>
          <span className="text-2xl lg:text-6xl  font-medium pr-2">
            Investor Info
          </span>
        </div>

        <div className="lg:py-24   lg:pl-[580px] ">
          <ul className="leading-8 " data-aos="fade-up">
            <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-16 font-medium">
                Governance <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Annual Report And Postal Ballot <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Quarterly Report <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Newspaper Publications <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Notice and Announcements <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Contact for Investors <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Other Statutory Governance <br />
                <br />
              </Link>
            </li>
            <li className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-700">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Subsidiary Financials <br />
                <br />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className=" flex justify-center items-center  bg-slate-300 py-10" data-aos="fade-up">
        <div className=" flex flex-col justify-center items-center">
          <h1 className=" text-3xl lg:text-4xl lg:my-6 font-medium py-5">
            Need help? You just need to tell us.
          </h1>
          <button className=" 3/4 mt-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 rounded-lg hover:border-black hover:border-solid   ">
            Contact us
          </button>
        </div>
      </section>
    </div>
  );
};

export default page;
