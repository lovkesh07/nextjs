"use client";
import React from "react";
 import { useRouter } from 'next/navigation'

const Cards = () => {
  const router = useRouter()
  return (
    <div className=" w-full py-10 px-5">
      <div className="">
        <div className=" w-[90%] mx-auto py-5">
          <p className=" my-2 pb-4 text-3xl md:text-4xl lg:text-8xl font-bold" data-aos="fade-up">
            Our Services
          </p>
          <p
            className=" w-[90%] sm:w-[80%] text-lg sm:text-2xl  pb-4"
            data-aos="fade-up"
          >
            We offer a comprehensive range of advanced IT solutions and services
            to meet the diverse technological needs of businesses and
            individuals. Our portfolio includes:
          </p>
        </div>
        <div className="py-16 lg:py-16 w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            className=" w-full md:w-[100%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/itconsultingservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Consulting Services:
            </h2>
            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              Our expert consultants conduct in-depth assessments of your
              existing IT infrastructure, aligning them with your business
              objectives. Through our customized recommendations, we optimize
              your technology environment, enhance efficiency, and boost overall
              productivity.
            </p>
           
          </div>

          <div
            className=" w-full md:w-[100%] cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/customsoftwaredevelopment")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Custom Software Development:
            </h2>
            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              With our cutting-edge software development expertise, we create
              tailored solutions that cater to your unique business
              requirements. Our skilled developers leverage the latest
              technologies to build secure, scalable, and user-friendly
              software, including web and mobile applications, as well as
              enterprise systems.
            </p>
            
          </div>

          <div
            className=" w-full cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/cloudcomputingsolutions")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cloud Computing Solutions:
            </h2>

            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              Experience the power of cloud technology through our comprehensive
              range of services. We facilitate seamless migration of your IT
              infrastructure to the cloud and develop cloud-native applications.
              Our offerings cover cloud strategy, infrastructure setup,
              migration, and ongoing management, delivering flexibility,
              scalability, and cost-efficiency.
            </p>
           
          </div>

          <div
            className=" w-full cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/cybersecurityservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Cybersecurity Services:
            </h2>

            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              Safeguarding your digital assets is our top priority. Our
              cybersecurity solutions include thorough threat assessments,
              vulnerability scanning, and penetration testing. We implement
              robust security measures to protect your networks, systems, and
              data against evolving cyber threats, ensuring data privacy and
              regulatory compliance.
            </p>
           
          </div>

          <div
            className=" w-full cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/ITsupport&managedservices")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Support and Managed Services:
            </h2>

            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              Count on our dedicated support team for prompt assistance and
              proactive monitoring of your IT infrastructure. We handle
              troubleshooting, hardware and software issues, as well as managing
              backups and updates. Our comprehensive support services are
              tailored to meet your specific needs.
            </p>
            
          </div>

          <div
            className=" w-full cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/DataAnalyticsandBusinessIntelligence")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              Data Analytics and Business Intelligence:
            </h2>

            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              Unlock valuable insights from your data to make informed
              decisions. Our data analytics and business intelligence solutions
              employ advanced tools and techniques to transform raw data into
              actionable intelligence. Gain a competitive edge and fuel business
              growth through our expertise.
            </p>
            
          </div>

          <div
            className=" w-full cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-blue-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100"
            data-aos="fade-up" onClick={() => router.push("/services/ITTrainingandEducation")}
          >
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              IT Training and Education:
            </h2>

            <p className=" text-xs sm:text-sm  md:text-base lg:text-lg text-white px-3 py-2">
              Stay ahead in the dynamic technology landscape with our training
              programs and workshops. We empower individuals and organizations
              with knowledge and skills in software development, cybersecurity,
              cloud computing, and data analytics. Our comprehensive training
              offerings ensure you stay up-to-date with the latest trends.
            </p>
            
          </div>

          <div className=" w-full cursor-pointer gap-3 md:gap-0 mx-auto flex flex-col items-center rounded-md shadow-md bg-purple-500 hover:shadow-black hover:scale-[1.01] transition-all duration-300 delay-100" data-aos="fade-up" onClick={() => router.push("/services/ArVrservices")}>
            <h2 className=" w-full text-left px-3 py-2 text-xl lg:text-2xl text-white">
              AR/VR Services:
            </h2>

            <p className=" text-xs sm:text-sm text-white lg:px-8 px-3 py-2">
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
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
