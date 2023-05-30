import React from 'react'
import Slide1 from "@assets/img1.jpg";
import Image from 'next/image';
import Longcard from './AboutLongCard'
import Cards from './AboutCard';
import WrittenContent from './WrittenContent';

const AboutUs = () => {
  return (
    <div className='mt-[80px] bg-gray-300'>
        <div className='relative'>
        <Image src={Slide1} alt="badag" width={800} height={800} className=' w-full h-[60vh]' />
        <div className=' absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16'>
            <p className='text-lg'>Home/About Us</p>
            <h1 className='text-3xl sm:text-5xl font-bold'>Tracing milestones of our growth</h1>
        </div>
        </div>
        <WrittenContent/>
        <Longcard/>
        <Cards/>
        <div className=' w-full bg-gradient-to-r from-cyan-700 to-blue-700 flex justify-center items-center py-10'>
            <div className='w-fit px-4'>
                <h1 className=' text-5xl text-white font-bold'>Facing a challenge?</h1>
                <p className='text-white font-thin py-3'>We will make sure you stay ahead of the curve.</p>
                <button className=" my-5 text-white bg-transparent border border-white  px-5 py-2 rounded-md">
                Let's Talk
              </button>
            </div>
        </div>
    </div>
  )
}

export default AboutUs