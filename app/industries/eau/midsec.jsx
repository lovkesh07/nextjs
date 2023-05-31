import React from "react";
import Img1 from "@assets/eau.webp";
import Image from "next/image";

const midsec = () => {
  return (
    <>
      <div className="mx-auto p-8 lg:p-24">
        <h1 className="font-medium text-xl md:text-2xl lg:text-6xl">
          Benefits of our Extensive Experience
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

          <div className=" p-8 lg:p-12   ">
            <div className=" text-slate-700 ">
              <ul className="leading-8 ">
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                    We provide solutions to help you maximize the benefits of
                    investing in smart grids <br />
                  </h1>

                </li>
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                    We leverage our digital expertise to provide best-in-class
                    user experiences <br />
                  </h1>

                </li>
                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                    We provide solutions that support rollouts of energy
                    consumption and behavior analytics <br />
                  </h1>

                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                    We consult for large companies, retail consumers and
                    multiservice municipalities <br />
                  </h1>

                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                    We provide cloud consulting services and seamlessly
                    integrate them into your IT infrastructure <br />
                  </h1>

                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className="font-medium">
                    We have a strong network of security professionals to meet
                    all compliance standards <br />
                  </h1>

                </li>

                <li className="py-4 lg:my-2 border-b-[1px] border-solid border-black">
                  <h1 className=" font-medium">
                    We help you achieve your goals through process improvement
                    and technology innovation <br />
                  </h1>

                </li>
                <li className="bg-indigo-300 p-4 rounded-lg ">
                    <p className="my-2">Got a tricky challenge? Need Value Added Solutions?
                        
                    </p>
                    <span className=" rounded-lg font-medium p-2 bg-slate-100">Let's Talk</span>
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
