import React from "react";

const WrittenContent = ({title,content}) => {
  return (
    <div className="w-full p-12 md:p-20">
      <h1 className=" text-xl sm:text-4xl md:text-5xl" data-aos="fade-up">
        {title}
      </h1>
      <div className="py-10 w-full sm:w-[85%]" data-aos="fade-up">
        <p className=" sm:ml-16 text-sm sm:text-xl text-gray-500">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WrittenContent;
