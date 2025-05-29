import React from 'react'

export default function PageHeader(props) {
  return (
    <div className='flex items-center w-full '>
      <img src="/page-header.png" className='object-contain w-[100%] ' alt="page header" />
      <h1 className='text-white absolute font-bold text-3xl px-3 z-10 md:text-5xl lg:text-6xl lg:px-20'>{props.pageTitle}</h1>
      {/* <div className="bg-linear-to-r from-[#001A6E] to-white w-full absolute opacity-50"></div> */}
    </div>
  )
}
