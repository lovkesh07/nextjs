import React from "react";
import Image from "next/image";


const Piclongcard = () => {
  const people = [
    {
      imageUrl:
"https://cdn.pixabay.com/photo/2021/12/20/12/45/woman-6882918_1280.jpg"    },
   
  ];

  return (
    <>
      <div className=" my-16 mt-4 lg:mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
          
          <ul className=" mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-1 xl:grid-cols-1">
            {people.map((person) => (
              <li key={person.name} data-aos="fade-up">
                <img
                  className="aspect-[14/13] w-full h-[80vh] rounded-2xl object-cover"
                  src={person.imageUrl}
                  alt=""
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
