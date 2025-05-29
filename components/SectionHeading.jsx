import React from 'react'

export default function SectionHeading(props) {
  return (
   <div className=''>
      <div className='flex items-center justify-center gap-3 mb-3'>
            <hr className='w-[2rem] text-[#A0C2F4] border-2 lg:hidden'/>
            <h2 className='font-bold text-3xl text-[#001A6E] text-center lg:text-6xl lg:text-left'>{props.heading}</h2>
            <hr className='w-[2rem] text-[#A0C2F4] border-2 lg:w-[5rem]'/>
      </div>
      <p className='text-gray-700 '>{props.text}</p>
   </div>
  )
}
