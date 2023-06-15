import React from 'react'

const Endsection = () => {
  return (
    <div className=' w-full p-10 bg-gray-300'>
        <div className=' p-6 text-gray-600' data-aos="fade-up">
            <p className='text-lg py-2'>Contact Us</p>
            <h1 className='text-2xl sm:text-5xl font-bold'>We’d love to hear from you</h1>
            <p className='text-lg py-4'>Our friendly team is always here to chat.</p>
        </div>
        <div className='p-10'>
            <div className=' grid grid-cols-1 sm:grid-cols-3 gap-5 items-center'>
                <div className='text-gray-500 px-2' data-aos="fade-up">
                    <div>
                        <h1 className='text-2xl text-gray-700'>Email</h1>
                        <p className='text-base py-2'><b>Sales:</b> ask@Dotclu.com</p>
                        <p className='text-base py-2'><b>General:</b> info@Dotclu.com</p>

                    </div>
                </div>
                <div className='text-gray-500 px-2' data-aos="fade-up">
                    <h1 className='text-2xl text-gray-700'>Calls</h1>
                    <p className='text-base py-2'><b>North America:</b> 1.844.469.8900</p>
                    <p className='text-base py-2'><b>Asia:</b>+91.124.469.8900</p>
                    <p className='text-base py-2'><b>Europe:</b>+44.203.807.6911</p>
                </div>
                <div className='text-gray-500 px-2' data-aos="fade-up">
                    <h1 className='text-2xl text-gray-700'>Socials</h1>
                    <p className='text-base py-2'><b>Linkedin</b></p>
                    <p className='text-base py-2'><b>Twitter</b></p>
                    <p className='text-base py-2'><b>YouTube</b></p>
                    <p className='text-base py-2'><b>FaceBook</b></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Endsection
