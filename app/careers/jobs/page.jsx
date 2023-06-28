import React from 'react'

const page = () => {
  return (
    <div className=''>
      <div className=' w-full flex flex-col justify-center items-center'>
        <h1 className=' w-full text-5xl text-center py-10 font-bold'>Open Positions</h1>
        <input type='text' placeholder='Enter a Keyword' className=" w-3/4 mx-auto ring mb-[3px] ring-white text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"/>
        <form   className=" w-3/4 bg-white my-4 mx-auto ring mb-[3px] ring-white text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black flex flex-row gap-3">
            <select id="roles" name="roles" className=' w-full outline-none text-gray-500'>
              <option value="saab">Roles</option>
              <option value="saab">Developer</option>
              <option value="fiat">Designer</option>
              <option value="audi">Engineer</option>
            </select>
        </form>
        <button className=" w-1/2 mx-auto my-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700 ">Find Job</button>
      </div>
      <div className='lg:p-24 p-5 flex flex-col items-center justify-center'>
        <div className=' w-full text-left px-2'>
        <p> 0 openings </p>
        </div>
        <div className=' w-full bg-white  my-3 h-[20vh] border-black border-[1px] border-solid'>
          <h1 className=' text-4xl p-3'>Currently Not Available</h1>
        </div>
        <button className=" w-1/2 mx-auto my-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700">Load More</button>
      </div>
      <div className='flex flex-col items-center justify-center bg-[#93BFCF] py-5'>
        <h1 className=' text-2xl py-4'>We’re always on the lookout for talents</h1>
        <p className=' text-lg text-gray-600'>Can’t find a job you’re looking for? Send us your CV and we’ll get in touch.</p>
        <button className=" w-1/2 mx-auto my-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  ">Write to us</button>
      </div>
    </div>
  )
}

export default page