import React from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Locations from '../components/Locations'
import About from '../components/About'
import Faqs from '../components/Faqs'
import Promotions from '../components/Promotions'

export default function Home() {
  return (
   <div className="flex flex-col gap-[5rem]">
    <Hero />
    <div className="flex items-center justify-center">
      <About />

    </div>
      <Services />
      <Locations />
      <Faqs />
      <Promotions />
      <div className="mb-[8rem]"></div>
   </div>
  )
}
