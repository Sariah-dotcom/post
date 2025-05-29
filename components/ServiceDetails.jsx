import React from 'react'

export default function ServiceDetails(props) {
  return (
    <div className="">
        <div className='flex items-center gap-10 p-3'>
      <div className="text-4xl lg:text-3xl text-[#001A6E]">
        {props.icon}
      </div>
      <div className=" flex flex-col gap-5 lg:gap-20 lg:flex-row lg:items-center">
        <h2 className='text-xl font-semibold lg:text-3xl lg:w-1/4 text-[#001A6E]'>
            {props.title}
        </h2>
        <p className='lg:w-[70%]'>
            {props.description}
        </p>
      </div>
     
    </div>
    <hr className='text-gray-500 mt-10' />
    </div>
  )
}
