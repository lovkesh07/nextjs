import React from 'react'

const Content = ({title,content}) => {
  return (
    <div className=' bg-[#1A374D] text-white min-w-full p-8'>
      <div className=' relative my-8 mx-auto w-full h-full'>
        <div className='absolute bg-[#1A374D] z-10 text-3xl font-bold top-[-20px] left-[-24px]'>{title}</div>
        <div className=' border-[1px] py-10 px-5 sm:py-7 md:py-10 border-white border-solid h-full text-xs sm:text-sm md:text-base lg-text-lg'>{content}</div>
      </div>
      
    </div>
  )
}

export default Content
