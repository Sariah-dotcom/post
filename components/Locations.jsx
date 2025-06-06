import { useRef } from 'react';
import SectionHeading from './SectionHeading';
import Accordion from './Accordion';

import { Link } from 'react-router-dom';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


export default function Locations() {
  const locationsRef = useRef();

  useGSAP(()=>{
    gsap.fromTo(
      locationsRef.current.querySelectorAll('.locations-content'),
      {
        opacity: 0,
        y:50,
      },
      {
        opacity: 1,
        y:0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3",
        scrollTrigger: {
          trigger: '#locations',
          start: "top 60%"
        }

      }
    )})
  return (
    <section id='locations' className='flex text-white flex-col items-center gap-20 bg-[#001A6E] lg:flex-row lg:justify-center py-20 px-5' ref={locationsRef}>

      {/* Left Column */}
      <div className=" flex flex-col locations-content">
        <SectionHeading heading="Multiple Locations Island-wide" />
        <p className='text-center text-sm md:text-lg lg:text-left mt-5'>
          With 8 locations across St.Vincent and the Grenadines, SVG Post is ready to serve you.
        </p>

        <div className='mt-15 py-4'>
          <Accordion 
            title="Windward"
            content={<ul>
              <li>Calliaqua Post Office</li>
              <li>Mesopotamia Post Office</li>
              <li>Georgetown Revenue Office</li>
            </ul>}
          />
          <Accordion 
            title="Leeward"
            content={<ul>
              <li>Layou Post Office</li>
              <li>Barrouallie Revenue Office</li>
              <li>Chateaubelair Post Office</li>
            </ul>}
          />
          <Accordion 
            title="Grenadines"
            content={<ul>
              <li>Bequia Revenue Office</li>
              <li>Union Island Revenue Office</li>
            </ul>}
          />
        </div>
      </div>

      <div className='hidden md:block locations-content'>
        <img src="/map.png" className='h-[40rem]' alt="" />
      </div>

      {/* Swiper Effect Cards */}
      {/* <div className='w-[300px]'>
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          grabCursor={true}
          className="mySwiper"
        >
         <SwiperSlide className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">What's my Postal Code?</h3>
            <Link className='text-blue-700'>Find out</Link>
          </SwiperSlide>

          <SwiperSlide className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">Calliaqua</h3>
            <p>Calliaqua Post Office</p>
          </SwiperSlide>

          <SwiperSlide className="bg-white text-black p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-lg">Barrouallie</h3>
            <p>Revenue Office</p>
          </SwiperSlide>
        </Swiper>
      </div> */}

    </section>
  );
}
