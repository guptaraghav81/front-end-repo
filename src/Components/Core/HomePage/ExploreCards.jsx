import React from 'react'
import { MdOutlinePeopleOutline } from "react-icons/md";

const ExploreCards = ({ item }) => {
  return (
    <div className='min-h-[200px] md:min-h-[243px] flex flex-col gap-2 md:gap-4 w-[280px] md:w-[360px] text-black bg-white p-4 md:p-6 rounded-lg shadow-lg shadow-richblue-400'>
      <div className='text-black font-bold text-base md:text-lg'>
        {item.heading}
      </div>
      <div className='text-richblack-200 font-inter pb-2 md:pb-4 min-h-[90px] md:min-h-[110px] text-sm md:text-base'>
        {item.description}
      </div>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-1 text-sm md:text-base'>
          <MdOutlinePeopleOutline className='text-[20px] md:text-[27px] text-blue-600' />
          <p className='text-blue-200'>{item.level}</p>
          <p className='font-semibold text-caribbeangreen-300'>{item.lessionNumber} Lessons</p>
        </div>
        <img src={item.logo} alt="logo" className='w-8 h-8 md:w-12 md:h-12 object-cover' />
      </div>
    </div>
  )
}

export default ExploreCards;
