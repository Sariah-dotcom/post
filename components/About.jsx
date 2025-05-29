import React from 'react'
import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section className='w-full flex justify-center'>
      <div className='lg:w-[80%] lg:flex  px-4'>
        <div className=''>
          <SectionHeading heading = "About" />
        </div>
        <div className="text-center lg:text-right">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis quasi rerum debitis tempore dolorum! Saepe veritatis doloribus nihil commodi numquam earum velit amet, quas corporis a eius, blanditiis consequuntur quae?</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo aspernatur molestias hic veritatis facere ipsum. Rem quisquam commodi mollitia quidem placeat aspernatur quo laboriosam! Ipsum beatae quisquam numquam ullam consequuntur.</p>
        </div>
      </div>
    </section>
  )
}
