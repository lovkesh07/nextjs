import React from "react";
// import Typed from "react-typed";
import Img1 from "@assets/it-integration-benefits.png";
import Img2 from "@assets/Managed-IT-Security-Services.png";
import Img3 from "@assets/it-integration.png";
import Img4 from "@assets/it-integration-benefits.png";
import Img5 from "@assets/IT-Security-Auditing.png";
import Img6 from "@assets/IT-Security-Integration.png";
import Image from "next/image";
import Link from "next/link";

const FlipCards = () => {
  return (
    <div className=" bg-white py-5">
      <h1 className=" w-full text-center text-3xl font-extrabold py-10  text-black">
        All You Need To Know..
      </h1>
      <div className=" py-10 grid  grid-cols-1  md:grid-cols-2 gap-5">
        <div className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px]  mx-auto group [perspective:1000px] ">
          <div className=" text-center w-[260px] h-[260px] md:w-[400px] md:h-[400px]  relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center bg-gray-100  text-xl md:text-3xl w-[260px] h-[260px] md:w-[400px] md:h-[400px]  absolute  [transform:rotate(180deg)] ">
              <Image className=" w-[120px] md:w-[200px] my-4" src={Img1} />
              <h1>Our Mission:</h1>
            </div>
            <div className=" text-left text-xs md:text-xl lg:text-xl px-2 py-6 w-[260px] h-[260px] md:w-[400px] md:h-[400px]   bg-gray-400 text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                Our mission is to be a trusted partner in the digital journey of
                our clients, delivering exceptional IT solutions and services
                that propel their success. We are committed to understanding our
                clients' unique challenges and goals, and we leverage our
                expertise to provide tailored solutions that drive efficiency,
                enhance productivity, and foster growth.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] mx-auto group [perspective:1000px] ">
          <div className=" text-center w-[260px] h-[260px] md:w-[400px] md:h-[400px]  relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center bg-gray-100  text-xl md:text-3xl w-[260px] h-[260px] md:w-[400px] md:h-[400px]  absolute  [transform:rotate(180deg)] ">
              <Image className=" w-[120px] md:w-[200px] my-4" src={Img2} />
              <h1>Our Expertise:</h1>
            </div>
            <div className=" text-left text-xs md:text-xl lg:text-xl px-2 py-6 w-[260px] h-[260px] md:w-[400px] md:h-[400px]   bg-gray-400 text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                With years of experience in the IT industry, we have honed our
                skills in a diverse range of technological domains. From
                software development and cloud computing to cybersecurity and
                data analytics, we possess comprehensive expertise to cater to
                the ever-evolving needs of our clients. We stay up-to-date with
                the latest advancements in technology, ensuring that we offer
                innovative and future-ready solutions.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] mx-auto group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] md:w-[400px] md:h-[400px]  relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center bg-gray-100  text-xl md:text-3xl w-[260px] h-[260px] md:w-[400px] md:h-[400px]  absolute  [transform:rotate(180deg)] ">
              <Image className=" w-[120px] md:w-[200px] my-4" src={Img3} />
              <h1>Customer-Centric Approach:</h1>
            </div>
            <div className=" text-left text-xs md:text-xl lg:text-xl px-2 py-6 w-[260px] h-[260px] md:w-[400px] md:h-[400px]   bg-gray-400 text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                At the core of our philosophy lies a customer-centric approach.
                We believe in building strong, long-lasting relationships with
                our clients by actively listening to their needs, understanding
                their pain points, and collaborating closely to deliver
                solutions that address their specific challenges. We strive for
                transparency, open communication, and unwavering commitment to
                client satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] mx-auto group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] md:w-[400px] md:h-[400px]  relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center bg-gray-100  text-xl md:text-3xl w-[260px] h-[260px] md:w-[400px] md:h-[400px]  absolute  [transform:rotate(180deg)] ">
              <Image className=" w-[120px] md:w-[200px] my-4" src={Img4} />
              <h1>Quality and Excellence:</h1>
            </div>
            <div className=" text-left text-xs md:text-xl lg:text-xl px-2 py-6 w-[260px] h-[260px] md:w-[400px] md:h-[400px]   bg-gray-400 text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                We are committed to delivering high-quality solutions and
                services that meet and exceed industry standards. Our team
                follows rigorous quality assurance processes, ensuring that
                every project is executed with precision and attention to
                detail. We believe in continuous improvement, regularly
                assessing our performance and seeking feedback to enhance our
                processes and deliver excellence consistently.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] mx-auto  group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] md:w-[400px] md:h-[400px]  relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center bg-gray-100  text-xl md:text-3xl w-[260px] h-[260px] md:w-[400px] md:h-[400px]  absolute  [transform:rotate(180deg)] ">
              <Image className=" w-[120px] md:w-[200px] my-4" src={Img5} />
              <h1>Collaborative Partnership:</h1>
            </div>
            <div className=" text-left text-xs md:text-xl lg:text-xl px-2 py-6 w-[260px] h-[260px] md:w-[400px] md:h-[400px]   bg-gray-400 text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                We view our relationship with clients as a partnership. We work
                side by side with our clients, fostering collaboration and
                knowledge sharing to achieve shared goals. By understanding your
                unique business requirements, we tailor our solutions to your
                specific needs, providing personalized attention and support
                throughout the engagement.
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[260px] h-[260px] md:w-[400px] md:h-[400px] mx-auto group [perspective:1000px]">
          <div className=" text-center w-[260px] h-[260px] md:w-[400px] md:h-[400px]  relative [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)] transition-transform duration-700 delay-100 rotate-180">
            <div className=" flex flex-col justify-center items-center bg-gray-100  text-xl md:text-3xl w-[260px] h-[260px] md:w-[400px] md:h-[400px]  absolute  [transform:rotate(180deg)] ">
              <Image className=" w-[120px] md:w-[200px] my-4" src={Img6} />
              <h1>Social Responsibility:</h1>
            </div>
            <div className=" text-left text-xs md:text-xl lg:text-xl px-2 py-6 w-[260px] h-[260px] md:w-[400px] md:h-[400px]  bg-gray-400 text-white absolute [transform:rotateX(180deg)] [backface-visibility:hidden]">
              <p>
                We are dedicated to making a positive impact on the community
                and society as a whole. We strive to operate in an
                environmentally responsible manner, promoting sustainable
                practices within our operations. Additionally, we actively
                participate in social initiatives and support organizations that
                drive positive change in areas such as education, healthcare,
                and environmental conservation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCards;
