import React from 'react'

export default function SectionHeading({textColor, heading}) {
  return (
   <div className='mb-2 md:mb-10'>
      <h2 className={`font-bold text-4xl text-center md:text-5xl lg:text-6xl ${textColor}`}>{heading}</h2>
   </div>
  )
}
