import React from 'react'
import Slide1 from "@assets/img1.jpg";
import Image from 'next/image';
import Longcard from './ContactLongCard'
import ContactUsForm from "./ContactUsForm"
// import Cards from './AboutCard';
import WrittenContent from './ContactWrittenPart';
import Acknowledgement from './Acknowledgement';

const AboutUs = () => {
  return (
    <div className='mt-[80px] '>
        <div className='relative'>
        <Image src={Slide1} alt="badag" width={800} height={800} className=' w-full h-[60vh]' />
        <div className=' absolute top-[50%] translate-y-[-50%] text-white px-10 md:px-16'>
            <p className='text-lg py-2'>Home/Contact Us</p>
            <h1 className='text-3xl sm:text-5xl font-bold'>Let’s level up your brand together</h1>
            <p className='text-lg py-2'>Our friendly team would love to hear from you</p>

        </div>
        </div>
        <WrittenContent/>
        <Acknowledgement/>
        <Longcard/>
        <ContactUsForm/>
    </div>
  )
}

export default AboutUs
