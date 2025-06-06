import { useRef } from 'react'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Locations from '../components/Locations'
import Faqs from '../components/Faqs'
import Promotions from '../components/Promotions'



export default function Home() {

  return (
   <div className="flex flex-col gap-[5rem] lg:gap-[15rem]">
    <Hero />
    <Services />
    <Locations />
    <Promotions />
    {/* <Faqs />
    <Promotions /> */}
    <div className="mb-[8rem]"></div>
   </div>
  )
}
