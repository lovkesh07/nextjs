import React from "react";
import Image from "next/image";
import img4 from "../../../public/Images/ai3.webp";

const Piclongcard = () => {
  const people = [
    {
      imageUrl:
        "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/05/woman-in-vr-headset-e1686030555215.jpg",
    },
    {
      imageUrl:
        "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/05/african-girl-adjusting-the-vr-headset--e1686030544477.jpg",
    },
    {
      imageUrl:
        "https://kit.baliniz.com/virtty/wp-content/uploads/sites/55/2023/06/virtual-reality-headset-e1685721816288.jpg",
    },
    {
      imageUrl: img4,
      // "https://www.zdnet.com/article/what-is-ai-heres-everything-you-need-to-know-about-artificial-intelligence/",
    },
  ];

  return (
    <>
      <div className=" my-16 mt-16 lg:mt-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto lg:mx-0">
            <h2
              className="text-3xl sm:text-5xl lg:text-6xl font-medium"
              data-aos="fade-up"
            >
              Dive Into the Future With AI & Generative AI
            </h2>
          </div>
          <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
            {people.map((person) => (
              <img
                className="aspect-[14/13] w-full h-[60vh] rounded-2xl object-cover"
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
