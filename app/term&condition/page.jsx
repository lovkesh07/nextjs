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
    setTitle(" Terms and Conditions");

    setContent(
      "At Dotclu, we are committed to protecting the privacy and security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and store your data when you interact with our website, products, and services. We encourage you to read this policy carefully to understand our practices regarding your personal information."
    );
  }, []);
  return (
    <div className="w-full">
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
            Terms and Conditions
          </h1>
        </div>
      </div>
      <WrittenContent title={title} content={content} />
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">1. Intellectual Property</h1>
          <p className=" sm:text-lg pl-8 py-3">
            All content, materials, and intellectual property available on our
            website and within our services, including but not limited to text,
            graphics, logos, images, software, and audio/video clips, are owned
            by Dotclu or its licensors. You may not use, reproduce, distribute,
            or modify any content without our prior written consent.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">2. Use of Services:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            You may use our services for lawful purposes and in compliance with
            these Terms. You agree not to engage in any activity that may
            interfere with or disrupt the functionality of our services,
            compromise the security of our systems, or infringe upon the rights
            of others.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">3. User Accounts:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            Some of our services may require you to create a user account. You
            are responsible for maintaining the confidentiality of your account
            credentials and for all activities that occur under your account.
            You agree to provide accurate and complete information during the
            registration process and to promptly update any changes.
          </p>
        </div>
      </div>

      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">4. Privacy:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            Your privacy is important to us. Our collection and use of your
            personal information are governed by our Privacy Policy. By using
            our services, you consent to the collection, use, and disclosure of
            your information as described in our Privacy Policy.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            5. Third-Party Links and Content:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            Our services may contain links to third-party websites, products, or
            services. We do not endorse or assume any responsibility for the
            content, accuracy, or privacy practices of these external sites.
            Your interactions with third-party websites or services are solely
            between you and the respective third party.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            6. Limitation of Liability:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            We strive to provide accurate and reliable information and services.
            However, we do not guarantee the completeness, accuracy, or
            reliability of any content or materials provided. We shall not be
            liable for any direct, indirect, incidental, consequential, or
            punitive damages arising out of your use of our services.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">7. Indemnification</h1>
          <p className=" sm:text-lg pl-8 py-3">
            You agree to indemnify, defend, and hold harmless Dotclu and its affiliates, officers, directors, employees, and agents
            from and against any claims, liabilities, damages, losses, costs, or
            expenses arising out of your use of our services or violation of
            these Terms.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            8. Modifications to the Terms:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            We reserve the right to update or modify these Terms at any time
            without prior notice. It is your responsibility to review these
            Terms periodically for any changes. Your continued use of our
            services after the posting of modifications constitutes acceptance
            of the revised Terms.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">
            9. Governing Law and Jurisdiction:
          </h1>
          <p className=" sm:text-lg pl-8 py-3">
            These Terms shall be governed by and construed in accordance with
            the laws of India. Any disputes arising out of or relating to these
            Terms shall be exclusively subject to the jurisdiction of the courts
            in Dotclu's jurisdiction.
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <h1 className=" font-semibold text-xl">10. Contact Us:</h1>
          <p className=" sm:text-lg pl-8 py-3">
            If you have any questions, concerns, or feedback regarding these
            Terms, please contact us at <span className=" text-blue-500 border-b-[1px] border-transparent hover:border-blue-500 transition-all duration-100 ease-in cursor-pointer">info@dotclu.com</span>
          </p>
        </div>
      </div>
      <div className="w-full p-8 sm:p-12 md:p-20">
        <div>
          <p className=" sm:text-lg pl-8 py-3">
            By using our services, you acknowledge that you have read,
            understood, and agreed to these Terms and Conditions. If you do not
            agree with these Terms, please discontinue the use of our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
