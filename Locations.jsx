import React from 'react';
import { IoMdAdd } from "react-icons/io";
import SecondaryCard from './SecondaryCard';
import SectionHeading from './SectionHeading';
import Accordion from './Accordion';
import { GoArrowUpRight } from "react-icons/go";


import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { Link } from 'react-router-dom';

export default function Locations() {
  return (
    <section className='flex text-white flex-col items-center gap-10 bg-[#03154E] p-4 lg:flex-row lg:justify-center py-20'>

      {/* Left Column */}
      <div className="lg:w-1/2 flex flex-col gap-10">
        <div className="flex items-center justify-center gap-3 mb-3">
          <hr className='w-[2rem] border-2' />
          <h2 className='text-center text-2xl font-semibold'>
            Multiple Locations <br /> Island-wide
          </h2>
          <hr className='w-[2rem] border-2' />
        </div>
        <p className='text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab deserunt rerum consequuntur, 
          accusantium voluptatum accusamus minima veritatis ex esse ad? Ab?
        </p>

        <div>
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

      {/* Swiper Effect Cards */}
      <div className='w-[300px]'>
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
      </div>

    </section>
  );
}
