import React from "react";

const WrittenContent2 = ({title,content1,content2,head1,head2}) => {
  return (
    <div className="w-full p-8 sm:p-12 md:p-20">
      <h1 className=" text-2xl sm:text-4xl md:text-5xl font-bold" data-aos="fade-up">
        {title}
      </h1>
      <div className="py-10 w-full sm:w-[90%]" data-aos="fade-up">
        <p className=" w-full text-base sm:text-xl text-slate-600 pb-4">
          <span className=" font-bold">{head1}</span>{content1}
        </p>
        <p className=" w-full text-base sm:text-xl text-slate-600 pb-4">
          <span className=" font-bold">{head2}</span>{content2}
        </p>
      </div>
    </div>
  );
};

export default WrittenContent2;