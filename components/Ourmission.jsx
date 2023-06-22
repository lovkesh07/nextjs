"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";
import { useRouter } from "next/navigation";
import img1 from "../public/Images/hi.jpg";
import img2 from "../public/Images/mi.jpg";
import img3 from "../public/Images/es.jpg";
import img4 from "../public/Images/eci.jpg";
import img5 from "../public/Images/gs.webp";

const Ourmission = () => {
  const router = useRouter();
  return (
    <>
      <div className=" p-4 lg:p-16">
        <div className="mx-auto  lg:p-16">
          <p
            className=" text-3xl md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            {" "}
            Our mission
          </p>
          <p className=" text-2xl py-5" data-aos="fade-up">
            To be the trusted digital partner and drive transformational
            outcomes for our customers, and empower our employees to achieve
            their full potential.
          </p>
        </div>
        <div className=" w-full h-[80vh] bg-[url('../public/Images/LandingPage.gif')] bg-fixed bg-contain bg-center bg-no-repeat flex items-center justify-center"></div>
        <div className="mx-auto my-12 lg:p-16 ">
          <p
            className="text-3xl md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            Industries we serve
          </p>
          <p className="text-2xl py-5 " data-aos="fade-up">
            We revolutionalize industries with the power of tech, to seamlessly
            weave a tapestry of innovation, efficiency, and growth.{" "}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-x-2 gay-y-3 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
          <div class="shadow-lg bg-blue-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg row-span-2">
            <Image
              width={500}
              height={500}
              className=" h-[30vh] object-cover"
              src={img1}
              alt="a"
            />

            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Healthcare Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Provide IT consulting for hospitals and clinics to optimize
                their electronic health record systems, streamline patient data
                management, and enhance data security and privacy.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg bg-yellow-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg">
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Retail Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Offer consulting services to help retailers implement
                omnichannel strategies, integrate e-commerce platforms, and
                leverage customer relationship management (CRM) systems for
                personalized marketing campaigns.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>

            </div>
          </div>

          <div class="shadow-lg bg-orange-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg lg:row-span-2">
            <Image
              width={500}
              height={500}
              className=" h-[30vh] object-cover"
              src={img2}
              alt="a"
            />
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Manufacturing Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Develop custom software solutions to automate production
                processes, track inventory, and optimize supply chain management
                for improved operational efficiency.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg bg-rose-100  text-lg font-bold text-center p-0 rounded-lg">
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Financial Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Create secure and scalable software applications for banks and
                financial institutions to facilitate online banking, payments,
                and fraud detection.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="display flex shadow-lg bg-green-100  text-lg font-bold text-center p-0 rounded-lg lg:col-span-3">
            <Image
              width={500}
              height={500}
              className=" h-[30vh] object-cover"
              src={img3}
              alt="a"
            />
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Education Sector
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Provide managed IT services to schools and universities,
                including maintenance of computer labs, troubleshooting software
                and hardware issues, and managing student information systems.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg bg-slate-200  text-lg font-bold text-center p-0 rounded-lg row-span-6">
            <Image
              width={500}
              height={500}
              className=" h-[30vh] object-cover"
              src={img4}
              alt="a"
            />
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                E-commerce Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Assist online retailers in migrating their infrastructure to the
                cloud, ensuring high availability, scalability, and seamless
                integration with third-party services for efficient order
                processing and inventory management.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg bg-indigo-100  text-lg font-bold text-center p-0 rounded-lg">
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Banking and Finance Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Conduct thorough security assessments, implement multi-factor
                authentication, and deploy intrusion detection and prevention
                systems to protect sensitive customer data and prevent financial
                fraud.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg bg-red-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg lg:row-span-2">
            <Image
              width={500}
              height={500}
              className=" h-[30vh] object-cover"
              src={img5}
              alt="a"
            />
            <div className=" p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
                Government Sector
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Provide cybersecurity solutions to government agencies, ensuring
                secure data transmission, protecting critical infrastructure,
                and defending against cyber threats aimed at national security.
              </p>

              <Link
                href=""
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
