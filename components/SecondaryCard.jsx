import React from 'react'

export default function SecondaryCard(props) {
  return (
    <div className='h-[30rem] w-[22rem] bg-[#0E2148] text-white rounded-lg px-5 pt-20 pb-5 flex flex-col justify-between'>
      <div>
        <h2 className='font-semibold text-3xl mb-3'>{props.title}</h2>
        <p className='w-[70%]'>{props.description}</p>
      </div>
      <img className='h-60 w-30 border ml-auto -mt-25' src={props.img} alt="image" />
      <button className='font-semibold'>{props.btnText}</button>
    </div>
  )
}
