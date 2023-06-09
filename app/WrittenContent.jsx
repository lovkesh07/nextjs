import React from "react";

const WrittenContent = ({title,content}) => {
  return (
    <div className="w-full p-8 sm:p-12 md:p-20">
      <h1 className=" text-2xl sm:text-4xl md:text-5xl font-bold" data-aos="fade-up">
        {title}
      </h1>
      <div className="py-10 w-full sm:w-[90%]" data-aos="fade-up">
        <p className=" w-full text-base sm:text-xl text-slate-600 pb-4">
          {content}
        </p>
      </div>
    </div>
  );
};

export default WrittenContent;
