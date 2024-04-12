import React from 'react'
import { collegeLogo } from '../../../Data/collegeLogo'

const CollegeBoard = () => {
  return (
    <div className=' flex flex-col mt-[8vh] lg:mt-[15vh] gap-4 items-center'>
      <h1 className='text-3xl font-bold'>Approved Online Universities</h1>
       <div className='flex flex-wrap gap-4 justify-center'>
       {collegeLogo.map((e)=>(<div className='flex flex-col px-2 w-40 lg:w-52 h-24 rounded-lg justify-center items-center border border-red-700'>
        <img src={e.logoimg} alt="N/A" className='w-24' />
        <p className=' leading-tight font-bold text-gray-600 text-sm '>{e.Offeredcourse} Courses</p>
        <h1 className=' whitespace-nowrap text-sm'>{e.collegename}</h1>
       </div>))}</div>
    </div>
  )
}

export default CollegeBoard