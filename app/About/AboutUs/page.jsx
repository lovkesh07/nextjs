import React from 'react'
import Slide1 from "@assets/img1.jpg";
import Image from 'next/image';
import Longcard from './AboutLongCard'
import Cards from './AboutCard';

const AboutUs = () => {
  return (
    <div className='mt-[80px]'>
        <div className='relative'>
        <Image src={Slide1} alt="badag" width={800} height={800} className=' w-full h-[60vh]' />
        <div className=' absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16'>
            <p className='text-lg'>Home/About Us</p>
            <h1 className='text-3xl sm:text-5xl font-bold'>Tracing milestones of our growth</h1>
        </div>
        </div>
        <Longcard/>
        <Cards/>
    </div>
  )
}

export default AboutUs
