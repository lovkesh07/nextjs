"use client";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import WrittenContent from "../WrittenContent";
import Slide1 from "../../public/Images/privacyimg.jpg";

const page = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setTitle("Privacy Policy");

    setContent(
      "Please read these Terms and Conditions (Terms) carefully before using the services provided by Dotlu (we,us, or our). These Terms govern your access to and use of our website, products, and services. By accessing or using our services, you agree to be bound by these Terms. If you do not agree with any part of these Terms, please refrain from using our services."
    );
  }, []);
  return (
    <div className=" w-full">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={2000}
          height={1800}
          className=" w-full h-[40vh] lg:h-[60vh]  mt-20"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <h1
            className=" backdrop-brightness-50 p-8 text-3xl sm:text-5xl lg:text-6xl font-bold"
            data-aos="fade-up"
          >
            Privacy Policy
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">1. Information We Collect:</h1>
          <p className=" text-base sm:text-lg pl-8 py-3">
            We may use the collected information for the following purposes:
          </p>
          <div className="pl-8 py-5 text-xs sm:text-sm">
            <p className="pl-5 py-3">
              - Personal information such as your name, email address, phone
              number, and company details.
            </p>
            <p className="pl-5 py-3">
              - Non-personal information such as IP addresses, browser type,
              device information, and website usage data.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            2. How We Use Your Information:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            When you visit our website or use our services, we may collect
            certain information, including but not limited to:
          </p>
          <div className="pl-8 py-5 text-xs sm:text-sm">
            <p className="pl-5 py-3">
              - To provide and improve our services, respond to inquiries, and
              fulfill your requests.
            </p>
            <p className="pl-5 py-3">
              - To personalize your experience, tailor content, and deliver
              relevant information.
            </p>
            <p className="pl-5 py-3">
              - To communicate with you, send updates, newsletters, and
              promotional materials.
            </p>
            <p className="pl-5 py-3">
              - To analyze and enhance our website's performance, security, and
              functionality.
            </p>
            <p className="pl-5 py-3">
              - To comply with legal obligations and protect our rights and
              interests.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">3. Information Sharing:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            We may share your personal information in the following
            circumstances:
          </p>
          <div className="pl-8 py-5 text-xs sm:text-sm">
            <p className="pl-5 py-3">
              - With trusted third-party service providers who assist us in
              operating our business and delivering our services.
            </p>
            <p className="pl-5 py-3">
              - With business partners, affiliates, or other trusted entities
              for collaborative purposes or to offer complementary services.
            </p>
            <p className="pl-5 py-3">
              - In response to a valid legal request, such as a court order,
              government inquiry, or applicable law enforcement investigation.
            </p>
            <p className="pl-5 py-3">
              - In connection with a corporate transaction, such as a merger,
              acquisition, or sale of assets, where your information may be
              transferred to the new entity.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">4. Data Security:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            We implement appropriate technical and organizational measures to
            protect your personal information from unauthorized access,
            alteration, disclosure, or destruction. However, no data
            transmission over the internet or storage system can guarantee
            absolute security. Therefore, while we strive to protect your data,
            we cannot warrant its complete security.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">5. Your Rights:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            You have certain rights regarding your personal information, which
            may include the right to access, update, or delete your data. You
            may also have the right to object to the processing of your
            information or request restrictions on its use. To exercise these
            rights or for any privacy-related inquiries, please contact us using
            the information provided in the "Contact Us" section below.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            6. Cookies and Tracking Technologies:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            We use cookies and similar tracking technologies to enhance your
            browsing experience, analyze website traffic, and personalize
            content. You can modify your browser settings to manage cookies and
            opt-out of certain tracking technologies, but please note that this
            may affect the functionality of our website.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">7. Third-Party Links:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            Our website may contain links to third-party websites, products, or
            services. We are not responsible for the privacy practices or
            content of these external sites. We encourage you to review the
            privacy policies of those third parties before providing any
            personal information.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            8. Updates to the Privacy Policy:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            We reserve the right to update or modify this Privacy Policy from
            time to time. Any changes will be effective upon posting the revised
            policy on our website. We encourage you to review this policy
            periodically for any updates.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">9. Contact Us:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            If you have any questions, concerns, or requests regarding our
            Privacy Policy or the handling of your personal information, please
            contact us at <span className=" text-blue-500 border-b-[1px] border-transparent hover:border-blue-500 transition-all duration-100 ease-in cursor-pointer">info@dotclu.com</span>
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <p className=" sm:text-lg pl-8 py-3">
            By using our website, products, or services, you signify your
            acceptance of this Privacy Policy. If you do not agree with this
            policy, please refrain from using our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
