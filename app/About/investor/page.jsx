import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Link from "next/link";
// import HiArrowLongRight from '@react-icons/fa'

const page = () => {
  return (
    <div className="mt-[80px] ">
      <div className="relative ">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg py-2">Home/Investors</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
            Investor Information
          </h1>
          <p className="text-lg py-2">Know who’s behind our company</p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24 bg-slate-300">
        <p className="text-2xl lg:text-6xl py-5 font-medium pr-2">
          {" "}
          Investor Information
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 lg:text-justify">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Kellton was founded in 2009 by a team of technology enthusiasts with
            a wealth of knowledge, talent, and ambition acquired from over a
            century of collective experience. Since then, they have built us up,
            led us to an IPO, and grown our company into an international
            workforce of 1,800+ across Asia, North America, and Europe. In these
            ten years, we have been lucky to work with some of the biggest
            brands in the world, from start-ups at incubation to global giants
            and the top of the Fortune 500 list. You will find all the investor
            information on Kellton that you might need here. This includes share
            prices, company policies, corporate governance, disclosures,
            financials, investor services, and reports and filings.
          </p>{" "}
        </div>
      </div>

      <section className="mx-auto p-8 lg:p-24 bg-slate-300">
        
        <div className="bg-slate-300">
          <h1 className="text-xl lg:text-2xl py-2  pr-2">Explore</h1>
          <span className="text-2xl lg:text-6xl  font-medium pr-2">
            Investor Info
          </span>
        </div>

        <div className="lg:py-24   lg:pl-[580px] bg-slate-300 ">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-16 font-medium">
                Governance <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Annual Report And Postal Ballot <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Quarterly Report <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Newspaper Publications <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Notice and Announcements <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Contact for Investors <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Other Statutory Governance <br/><br/>
                <span>-------------------------------------</span> <br/>
              </Link>
            </li>
            <li className="lg:my-8">
              <Link href="/" className="lg:text-4xl lg:my-6 font-medium">
                Subsidiary Financials  <br/><br/>
                <span>-------------------------------------</span>
              </Link>
            </li>
          </ul>
        </div>
        
      </section>

<section className=" flex justify-center items-center  bg-slate-300 py-10">
      <div className=" flex flex-col justify-center items-center">
        <h1 className=" text-3xl lg:text-4xl lg:my-6 font-medium py-5" >Need help? You just need to tell us.</h1>
        <button className=" 3/4 mt-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  hover:border-black hover:border-solid hover:border-[1px] ease-in duration-150 delay-75">Contact us</button>
      </div>
</section>

      
    </div>
  );
};

export default page;
