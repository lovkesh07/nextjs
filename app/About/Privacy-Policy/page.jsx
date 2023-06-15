import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";

const page = () => {
  return (

    <div>

      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          <p className="text-lg">Home/Privacy Policy</p>
          <h1 className="text-3xl sm:text-5xl font-bold">
          Privacy Policy
          </h1>
        </div>
      </div>
    
    <div className=" w-full md:w-[90%] px-5 lg:px-[200px] py-10 md:p-10">
      <div className="mb-10">
        <h1 className=" text-4xl md:text-5xl font-bold" data-aos="fade-up">Privacy Policy</h1><br/>
        <p className="text-lg text-gray-500 " data-aos="fade-up">
          <b>Last Modified:</b>May 25,2022
        </p>
      </div>
      <p className=" text-sm md:text-lg text-gray-500 py-10 " data-aos="fade-up">
        Dotclu and its affiliates are committed to protecting your privacy.
        This Privacy Policy applies to our website (www.Dotclu.com) and governs
        our data collection, processing, and usage practices. It also describes
        your choices on the use, access, and correction of your personal
        information. If you do not agree with the data practices described in
        this Privacy Policy, you are not entitled to use the Websites or the
        Subscription Service.We update this Privacy Policy regularly. All policy
        updates are posted on this page and if the changes are significant, we
        will intimate you through an email. While we notify you of any
        significant changes to this Privacy Policy, we encourage you to review
        this Privacy Policy periodically. We will also keep older versions of
        this Privacy Policy in an archive for your review.If you have any
        questions about this Privacy Policy or our handling of the information
        you provide us, please write to us at privacy@Dotclu.com or Dotclu,
        1367, Road No. 45, Nandagiri Hills, Jubilee Hills, Hyderabad, Telangana
        500033
      </p>
      <h1 className="text-2xl py-10 font-medium" data-aos="fade-up">Use of the Subscription Service</h1>
      <p className=" text-sm md:text-lg text-gray-500 py-10" data-aos="fade-up">
        Our online Subscription Service allows us to create and share marketing mailers and collaterals. The information added to the Subscription Service by users while subscribing to the website is stored and managed by our servers. This information is then used to contact visitors about their interest in the company's services. Dotclu provides the Subscription Service to our clients for their own marketing, lead generation, and customer service needs, and we use the same for our business requirements. We use our own Subscription Service to build web pages that people can visit to learn more about Dotclu. Information that we collect and manage using the Subscription Service belongs to us and is used, disclosed, and protected according to this Privacy Policy.
      </p>
      <h1 className="text-2xl py-10 font-medium" data-aos="fade-up">How We Use Information We Collect</h1>
      <p className=" text-sm md:text-lg text-gray-500 py-10" data-aos="fade-up">
        Our online Subscription Service allows us to create and share marketing mailers and collaterals. The information added to the Subscription Service by users while subscribing to the website is stored and managed by our servers. This information is then used to contact visitors about their interest in the company's services. Dotclu provides the Subscription Service to our clients for their own marketing, lead generation, and customer service needs, and we use the same for our business requirements. We use our own Subscription Service to build web pages that people can visit to learn more about Dotclu. Information that we collect and manage using the Subscription Service belongs to us and is used, disclosed, and protected according to this Privacy Policy.
      </p>
    </div>
    </div>
  );
};

export default page;
