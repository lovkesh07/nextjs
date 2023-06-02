import React from "react";

const Card = () => {
  return (
    <div className="p-16 w-full bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center py-10">
        <div className="w-fit px-4">
          {/* <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
          FUN FACT
          </button> */}
          <p className=" bg-slate-300 p-3 w-fit rounded-md">FUN FACT</p>
          {/* <h1 className=' text-5xl text-white font-bold'>Facing a challenge?</h1> */}
          <p className="text-white font-thin py-3 text-5xl">
          Global consumers spend 4.2 hours on average on apps every day.
          </p>
          <p>We make sure yours doesn't bring the average down.</p>
        </div>
      </div>
  );
};

export default Card;
