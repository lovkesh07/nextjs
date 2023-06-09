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
      <div className="">
      <div className=" w-full h-[60vh] bg-[url('../public/Images/p1.jpg')] bg-cover bg-fixed bg-top bg-no-repeat flex items-center justify-center">

        <div className=" w-full mx-auto text-white p-8  lg:p-16">
          <p
            className="  text-center  text-3xl md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            {" "}
            Our mission
          </p>
          <p className=" text-center text-2xl py-5" data-aos="fade-up">
            To be the trusted digital partner and drive transformational
            outcomes for our customers, and empower our employees to achieve
            their full potential.
          </p>
        </div>
        </div>
        <div className="mx-auto mt-14 p p-8 md:p-12 lg:p-16 " data-aos="fade-up">
          <p
            className="text-3xl text-center md:text-4xl lg:text-8xl font-bold"
            data-aos="fade-up"
          >
            Industries we serve
          </p>
          <p className="text-center text-2xl pt-5 pb-5" data-aos="fade-up">
            We revolutionalize industries with the power of tech, to seamlessly
            weave a tapestry of innovation, efficiency, and growth.{" "}
          </p>
        </div>

        <div class="grid grid-cols-1 gap-x-2 gap-y-6 grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-4 p-5 sm:p-16 ">
          <div class="shadow-xl hover:shadow-gray-500 bg-blue-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg row-span-2" data-aos="fade-up">
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
                href="/industries/healthindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-xl hover:shadow-gray-500 bg-yellow-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg" data-aos="fade-up">
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
                href="/industries/retailindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>

            </div>
          </div>

          <div class="shadow-xl hover:shadow-gray-500 bg-orange-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg lg:row-span-2" data-aos="fade-up">
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
                href="/industries/manufacturingindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-xl hover:shadow-gray-500 bg-rose-100  text-lg font-bold text-center p-0 rounded-lg" data-aos="fade-up">
            <div className="  p-5 h-[60%]  w-full relative transition-all duration-300">
              <h3 className="  text-lg font-semibold text-center leading-8 tracking-tight text-black">
              Insurance Industry
              </h3>
              <p className=" text-xs sm:text-sm leading-6 text-gray-500 py-5">
                Create secure and scalable software applications for banks and
                financial institutions to facilitate online banking, payments,
                and fraud detection.
              </p>

              <Link
                href="/industries/financeindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="display flex flex-col lg:flex-row shadow-xl hover:shadow-gray-500 bg-green-100  text-lg font-bold text-center p-0 rounded-lg lg:col-span-3" data-aos="fade-up">
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
                href="/industries/educationindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg hover:shadow-gray-500 bg-slate-200 text-green-500 text-lg font-bold text-center p-0 rounded-lg lg:row-span-2" data-aos="fade-up">
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
                href="/industries/ecommerceindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>

          </div>

          <div class="shadow-lg hover:shadow-gray-500 bg-indigo-100  text-lg font-bold text-center p-0 rounded-lg" data-aos="fade-up">
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
                href="/industries/bankingindustry"
                className=" px-2 py-2 text-black font-bold bg-white hover:bg-slate-100 rounded-md"
              >
                Read more{" "}
              </Link>
            </div>
          </div>

          <div class="shadow-lg hover:shadow-gray-500 bg-red-100 text-green-500 text-lg font-bold text-center p-0 rounded-lg lg:row-span-2" data-aos="fade-up">
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
                href="/industries/governmentindustry"
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
