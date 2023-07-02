import React from "react";
import Image from "next/image";
import img4 from "../../../public/Images/ai3.webp";

const Piclongcard = () => {
  const people = [
    {
      imageUrl:
"https://www.springboard.com/blog/wp-content/uploads/2022/02/is-ai-hard-to-learn-scaled.jpg"    },
  ];

  return (
    <>
      <div className=" my-16 mt-16 lg:mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 xl:grid-cols-1">
            {people.map((person) => (
              <img
                className="aspect-[14/13] w-full lg:h-[70vh] rounded-2xl object-cover"
                src={person.imageUrl}
                alt=""
                // data-aos="fade-up" data-aos-duration="1500"
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Piclongcard;
