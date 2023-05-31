import React from "react";
import Img1 from "@assets/eau.webp";
import Image from "next/image";

const midsec = () => {
  return (
    <>
      <div className="mx-auto p-8 lg:p-24">
        <h1 className="font-medium text-xl md:text-2xl lg:text-6xl">
          Support all your Oil and Gas capabilities with Kellton4ERP
        </h1>

        <div class="grid grid-cols-1 p-8 lg:p-12 gap-x-1 gap-y-1  md:grid-cols-2 lg:grid-cols-2">
          <div className=" lg:p-2  ">
            <Image
              src={Img1}
              alt="badag"
              width={1200}
              height={1200}
              className=" w-full h-[120vh] rounded-lg"
            />
          </div>

          <div className=" p-2 lg:p-12   ">
            <div className=" text-slate-700 ">
              <ul className="leading-8 my-4  ">
                <li className=" py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                  Production and revenue accounting <br />
                  </h1>
                </li>
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                  Ownership and interests <br />
                  </h1>
                </li>
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                  Upstream <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Measurement <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                  Royalty reporting and processing <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                  Contractual allocation<br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Tax reporting <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Contracts and pricing<br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Regulatory reporting <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Revenue distribution <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Check input <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Payment processing <br />
                  </h1>
                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                  Bulk storage and warehouse management of ingredients and finished goods <br />
                  </h1>
                </li>
                
                <li className=" my-4 bg-indigo-300 p-4 rounded-lg ">
                  <p className="my-2">
                  Leverage our unique approach that helps O&G companies overcome industry-specific challenges to manage a successful transformation, today.
                  </p>
                  <span className=" rounded-lg font-medium p-2 bg-slate-100">
                    Let's Talk
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default midsec;
