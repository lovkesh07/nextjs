import React from "react";
import img1 from "@assets/corpoimg.jpg";
import img2 from "@assets/corpoimg2.jpg";
import Link from "next/link";
import Image from "next/image";


const Blogs = () => {
  return (
    <div className=" w-full py-24 px-6 md:px-6 lg:px-10 flex flex-col gap-5 bg-[#E7E4E1]">
      <div className=" w-full lg:w-1/2 flex flex-col">
        <h1 className="text-4xl py-5">Leading Transformation</h1>
      </div>

      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className=" flex flex-col">
          <div>
            <Image src={img2} width={1000} height={1000} className="rounded-lg" />
          </div>
          <div className="flex flex-col px-2">
            <span className=" py-1 text-gray-500">Blog</span>
            <span className=" py-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              fuga iure, doloribus molestias accusamus nulla aperiam. Amet
              corporis officiis perferendis cupiditate, temporibus hic maiores
              provident eos quam ad voluptate quod.
            </span>
            <span className=" py-1 text-gray-500">25 May,2023</span>
          </div>
        </div>
        <div className=" flex flex-col">
          <div>
            <Image src={img2} width={1000} height={1000} className="rounded-lg" />
          </div>
          <div className="flex flex-col px-2">
            <span className=" py-1 text-gray-500">Blog</span>
            <span className=" py-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              fuga iure, doloribus molestias accusamus nulla aperiam. Amet
              corporis officiis perferendis cupiditate, temporibus hic maiores
              provident eos quam ad voluptate quod.
            </span>
            <span className=" py-1 text-gray-500">25 May,2023</span>
          </div>
        </div>
        <div className=" flex flex-col">
          <div>
            <Image src={img2} width={1000} height={1000} className="rounded-lg" />
          </div>
          <div className="flex flex-col px-2">
            <span className=" py-1 text-gray-500">Blog</span>
            <span className=" py-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              fuga iure, doloribus molestias accusamus nulla aperiam. Amet
              corporis officiis perferendis cupiditate, temporibus hic maiores
              provident eos quam ad voluptate quod.
            </span>
            <span className=" py-1 text-gray-500">25 May,2023</span>
          </div>
        </div>
        <div className=" flex flex-col">
          <div>
            <Image src={img2} width={1000} height={1000} className="rounded-lg" />
          </div>
          <div className="flex flex-col px-2">
            <span className=" py-1 text-gray-500">Blog</span>
            <span className=" py-1">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
              fuga iure, doloribus molestias accusamus nulla aperiam. Amet
              corporis officiis perferendis cupiditate, temporibus hic maiores
              provident eos quam ad voluptate quod.
            </span>
            <span className=" py-1 text-gray-500">25 May,2023</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blogs;
