import React from "react";
import Image from "next/image";


const Piclongcard = () => {
  const people = [
    {
      imageUrl:
        "https://www.securitymagazine.com/ext/resources/Issues/2023/April/SEC-0423-News1-Feat-Slide1-1170x658.jpg?1680893171",
    },
   
  ];

  return (
    <>
      <div className=" my-16 mt-16 lg:mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* <div className="mx-auto lg:mx-0">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-medium"
              data-aos="fade-up"
            >
              Stay ahead of cyber threat landscape with advanced security strategy and automated security measures
            </h2>
          </div> */}
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols- xl:grid-cols-1">
            {people.map((person) => (
              <li key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[14/13] w-full h-[60vh] rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
                  // data-aos="fade-up" data-aos-duration="1500"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Piclongcard;
