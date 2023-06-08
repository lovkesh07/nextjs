"use client";
import React from "react";

const Cards = () => {
  return (
    <div className=" w-full py-10 px-5">
      <div className="">
        <div className=" w-[90%] mx-auto py-5">
          <p className=" my-2 text-base md:text-lg pb-4" data-aos="fade-up">
            Current Openings:
          </p>
          <p
            className=" w-[80%] font-bold text-4xl md:text-5xl pb-4"
            data-aos="fade-up"
          >
            We are currently hiring for the following positions:
          </p>
        </div>
        <div className="py-16 lg:py-16 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className=" w-full md:w-[100%] h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Software Developer:
            </h2>
            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Join our development team and contribute to the design,
              development, and testing of innovative software solutions. Strong
              programming skills and a passion for creating high-quality code
              are a must.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          <div
            className=" w-full md:w-[100%] h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cybersecurity Analyst:
            </h2>
            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Help our clients safeguard their digital assets by analyzing
              threats, implementing security measures, and providing guidance on
              best practices in cybersecurity.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          <div
            className=" w-full  h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cloud Solutions Architect:
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Design and implement scalable and secure cloud-based solutions for
              our clients. Experience with cloud platforms and a deep
              understanding of cloud architecture principles are essential.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          {/* <div
            className=" w-full h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cybersecurity Services:
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Safeguarding your digital assets is our top priority. Our
              cybersecurity solutions include thorough threat assessments,
              vulnerability scanning, and penetration testing. We implement
              robust security measures to protect your networks, systems, and
              data against evolving cyber threats, ensuring data privacy and
              regulatory compliance.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          <div
            className=" w-full h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Support and Managed Services:
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Count on our dedicated support team for prompt assistance and
              proactive monitoring of your IT infrastructure. We handle
              troubleshooting, hardware and software issues, as well as managing
              backups and updates. Our comprehensive support services are
              tailored to meet your specific needs.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          <div
            className=" w-full h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Data Analytics and Business Intelligence:
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Unlock valuable insights from your data to make informed
              decisions. Our data analytics and business intelligence solutions
              employ advanced tools and techniques to transform raw data into
              actionable intelligence. Gain a competitive edge and fuel business
              growth through our expertise.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          <div
            className=" w-full h-[40vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Training and Education:
            </h2>

            <p className=" text-sm md:text-lg lg:text-xl text-white px-3 py-2">
              Stay ahead in the dynamic technology landscape with our training
              programs and workshops. We empower individuals and organizations
              with knowledge and skills in software development, cybersecurity,
              cloud computing, and data analytics. Our comprehensive training
              offerings ensure you stay up-to-date with the latest trends.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div>

          <div
            className=" w-full h-[50vh] md:h-[40vh] gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up"
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              AR/VR Services:
            </h2>

            <p className=" text-sm md:text-lg lg:text-sm text-white lg:px-8 px-3 py-2">
              We offer cutting-edge Augmented Reality (AR) and Virtual Reality
              (VR) solutions to enhance user experiences and create immersive
              digital environments. Our skilled team combines innovative
              technologies with creative expertise to develop AR/VR applications
              across various industries, such as gaming, real estate, retail,
              education, and training. Whether you need AR/VR simulations,
              virtual tours, interactive 3D experiences, or training
              simulations, we can design and develop customized AR/VR solutions
              that captivate users, boost engagement, and deliver impactful
              experiences.
            </p>
            <span className=" w-[100%] text-right pr-4 text-white">
              learn more
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Cards;
