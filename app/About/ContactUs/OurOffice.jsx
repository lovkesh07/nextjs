import React from 'react'
import Image from 'next/image'
import Map from "@assets/world-map.webp"

const OurOffice = () => {
  return (
    <div className=' w-full p-16 bg-gray-800'>
        <div className=' p-10 text-gray-100'>
            <p className='text-lg py-2'>Our Offices</p>
            <h1 className='text-3xl sm:text-5xl font-bold'>We are a global team</h1>
        </div>
        <Image src={Map} className='w-[280px]'/>
        
        <div className='p-16'>

        <div>
            <h1 className='text-xl py-5 font-bold text-gray-300'>North America</h1>
            <div className=' grid grid-cols-2 md:grid-cols-3 gap-2' data-aos="fade-up">
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>D.C. METRO Area</h1>
                    <p className='text-sm py-1'>11100 Wildlife Center Dr. Suite LL #150 300 Reston, VA 20190</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Chicago Area</h1>
                    <p className='text-sm py-1'>2001 Butterfield Rd Suite 240Downers Grove, IL 60515</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>NY/NJ Area</h1>
                    <p className='text-sm py-1'>3 Independence Way, Suite 209 Princeton, NJ 08540</p>
                    <p className='text-sm py-1'>185 Hudson Street, Suite 1440 Jersey City, NJ 073110</p>

                </div>
            </div>
        </div>
        <div>
            <h1 className='text-xl py-5 font-bold text-gray-300'>Asia</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-2' data-aos="fade-up">
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Corporate Headquarters</h1>
                    <p className='text-sm py-1'>Plot No. 1367, Road No.45 Jubilee Hills, Hyderabad, Telangana 500033</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Pune</h1>
                    <p className='text-sm py-1'>Dotclu Ltd, Lalwani House, Plot no 79, Sakore Nagar, Viman Nagar, Pune, Maharashtra 411014</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Singapore</h1>
                    <p className='text-sm py-1'>7B Keppel Road, #18-10 Tanjong Pagar Complex, Singapore 089055</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Gurgaon</h1>
                    <p className='text-sm py-1'>Plot No – 404-405, 4th & 6th Floor, ILABS Centre, Udyog Vihar, Phase- III, Gurugram, Haryana 122016</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Visakhapatnam</h1>
                    <p className='text-sm py-1'>7-1-75, Encore Centre, Chinna Waltair Main Road, Kirlampudi Layout, Pedda Waltair,<br/> Visakhapatnam, Andhra Pradesh 530017</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Dubai</h1>
                    <p className='text-sm py-1'>Level 21, Al Habtoor Business Towers, Dubai Marina, Dubai, UAE PO Box 29805</p>
                </div>
            </div>
        </div>
        <div>
            <h1 className='text-xl py-5 font-bold text-gray-300'>Europe</h1>
            <div className=' grid grid-cols-1 md:grid-cols-3 gap-2' data-aos="fade-up">
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Ireland</h1>
                    <p className='text-sm py-1'>The Mill, Newtown Link Road, Drogheda, Co. Louth</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>Poland</h1>
                    <p className='text-sm py-1'>ul. Wyścigowa 56G lok. 2A Wrocław, Poland 53-012</p>
                </div>
                <div className='text-gray-500 px-2'>
                    <h1 className='text-lg text-gray-300'>United Kingdom</h1>
                    <p className='text-sm py-1'>30 Stamford St, South Bank, London SE1 9LS</p>
                </div>
            </div>
        </div>
              </div>
    </div>
  )
}

export default OurOffice
