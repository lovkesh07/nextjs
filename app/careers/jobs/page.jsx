import React from 'react'

const page = () => {
  return (
    <div className='mt-[80px]'>
      <div className=' bg-gray-500'>
        <h1 className=' w-full text-5xl text-center py-10'>Open Positions</h1>
        <input type='text' placeholder='Enter a Keyword' value="keyword" className=" w-3/4 mx-auto ring mb-[3px] ring-white text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black"/>
        <form   className=" w-3/4 mx-auto ring mb-[3px] ring-white text-xs  rounded-sm px-4 py-2 outline-none focus:ring-2 focus:ring-black">
          <label for="roles">Roles</label>
            <select id="roles" name="roles">
              <option value="saab">Developer</option>
              <option value="fiat">Designer</option>
              <option value="audi">Engineer</option>
            </select>
        </form>
        <button className=" w-3/4 mx-auto mt-3  py-2 px-5 text-white bg-cyan-700 hover:bg-white hover:text-cyan-700  hover:border-black hover:border-solid hover:border-[1px] ease-in duration-150 delay-75">Find Job</button>
      </div>
    </div>
  )
}

export default page