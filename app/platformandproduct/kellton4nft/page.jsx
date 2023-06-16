import React from "react";
import Slide1 from "@assets/img1.jpg";
import Image from "next/image";
import Longcard from "./longcard";
import ContactUsForm from "@components/ContactUsForm";
import Cards from "./AboutCard";
import Sectionextra from "./sectionexra";
// import Extrasection2 from './extrasection2';

const page = () => {
  return (
    <div className="">
      <div className="relative">
        <Image
          src={Slide1}
          alt="badag"
          width={800}
          height={800}
          className=" w-full h-[80vh]"
        />
        <div className=" absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16">
          {/* <p className="text-lg">Home / Products / Dotclu4NFT</p> <br /> */}
          <h1 className="text-3xl sm:text-5xl font-bold">Dotclu4NFT</h1> <br />
          <p>
            Leveraging distributed ledger technologies to drive frictionless,
            infungible finance of the future
          </p>
        </div>
      </div>

      <div className="mx-auto p-8 lg:p-24">
        <p className="text-2xl lg:text-5xl py-5 font-medium pr-2">
          {" "}
          Trade digital assets efficiently and securely with our expert-built
          NFT marketplaces.
        </p>
        <br />
        <br />
        <div className="text-left lg:px-24 ">
          <p className=" text-xl md:text-2xl lg:text-2xl">
            Dotclu4NFT provides tools for artists, musicians, and other
            creators to tokenize their digital content as NFTs and sell them on
            blockchain-based marketplaces. The platform also includes features
            for NFT management, such as the ability to track ownership, transfer
            ownership, and enforce intellectual property rights.
            <br />
            <br />
            Dotclu4NFT is designed to be a scalable and secure platform that
            can be used by individuals, businesses, and organizations to unlock
            new revenue streams and monetize their digital content through the
            creation and sale of NFTs.
          </p>{" "}
        </div>
      </div>

      <Longcard />

      <section className="mx-auto p-8 lg:p-24 ">
        <h1 className="lg:py-6 text-4xl lg:text-6xl text-slate-700">
        Our Offerings
        </h1>

        <div className="lg:py-6 text-slate-800 lg:pl-[540px]">
          <ul className="leading-8 ">
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Strategic Consulting <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              We identify business goals and build a strategic vision. From helping businesses shift toward digital contracting to creating NFT marketplaces, we help you explore your transactional business ecosystem with the breakthrough potential of blockchain.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Cryptocurrency Wallet
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              We develop secure, simple, and compliant crypto-wallets by integrating with intelligent payment gateways along with multiple currency support powered by in-built exchange hubs, thereby making trading easier for the clients.
              </p>
            </li>
            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              NFT Marketplace Development <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              We design, deploy, and integrate blockchain's complex system into a user-friendly platform to develop through agile innovative methodologies to intuitive user interfaces and responsive design.
              </p>
            </li>

            <li className="lg:my-8">
              <h1 className="text-4xl lg:text-5xl my-6 lg:my-6 font-medium">
              Smart Contract Development
                <br />
              </h1>

              <p className="py-4 lg:my-2 border-b-[1px] border-solid border-slate-800">
              We develop bulletproof smart, autonomous contract architecture with proper IP tokenization by leveraging new-age distributed ledger technology which assures accuracy, transparency, and high speed.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Cards />

      <Sectionextra />
      <ContactUsForm />
     
    </div>
  );
};

export default page;
