import React from 'react'
import Image from 'next/image'
import Map from "@assets/world-map.webp"

const OurOffice = () => {
  return (
    <div className=' w-full'>
        <div className=' p-10 text-gray-500'>
            <p className='text-lg py-2'>Our Offices</p>
            <h1 className='text-3xl sm:text-5xl font-bold'>We are a global team</h1>
        </div>
        <Image src={Map}/>
    </div>
  )
}

export default OurOffice
