import React from 'react'
import Accordion from './Accordion'
import SectionHeading from './SectionHeading';


export default function Faqs() {
  return (
    <section className='p-3 flex flex-col gap-10 lg:items-center'>
        <div className="lg:w-[70%] lg:flex lg:items-center">
            <SectionHeading heading = 'Frequently Asked Questions' />
        
            <div className="lg:w-[80%]">
                <Accordion
                    title='Where are you located?'
                    content= "Our main office is located in Kingstown on the ground floor of the Ministeral Building"
                />
                <Accordion
                    title='How can I track my mail?'
                    content= "You can track your parcel or letter using the tracking number provided at the time of sending. You can click this link or contact SVGPC customer service for tracking information."
                />

                <Accordion
                    title='Where are you located'
                    content= "Our main office is located in Kingstown on the ground floor of the Ministeral Building"
                />
            </div>
        </div>
        
    </section>
  )
}
