import React from 'react'
import SectionHeading from './SectionHeading'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function Promotions() {
  return (
    <section>
        <SectionHeading heading="See What's Happening" textColor="text-[#001A6E]" />
    </section>

    // <section className='flex flex-col lg:flex-row lg:items-center gap-4'>
    //     <div className='lg:w-1/2 p-4'>
    //         <div className="lg:w-[70%]">
    //             <SectionHeading heading="See What's Happening" />
    //             <p className='text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequatur ratione voluptatibus repellendus, quibusdam minima aspernatur explicabo fugit dolorem, temporibus officia vero possimus in architecto nulla ipsa illo corrupti enim!</p>
    //         </div>
    //     </div>

    //     <div className='lg:w-1/2 bg-[#001A6E] py-10'>
    //         <Swiper
    //             effect={'coverflow'}
    //             grabCursor={true}
    //             centeredSlides={true}
    //             slidesPerView={'auto'}
    //             coverflowEffect={{
    //                 rotate: 50,
    //                 stretch: 0,
    //                 depth: 100,
    //                 modifier: 1,
    //                 slideShadows: true,
    //             }}
    //             pagination={{ clickable: true }}
    //             modules={[EffectCoverflow, Pagination]}
    //             className="mySwiper w-full max-w-xl"
    //             >
    //             <SwiperSlide className="text-black p-6 rounded-lg shadow-lg w-[250px]">
    //                 <img src="/posters/moneygram.png" alt="Moneygram Poster" />
    //             </SwiperSlide>
    //             <SwiperSlide className="text-black p-6 rounded-lg shadow-lg w-[250px]">
    //                 <img src="/posters/usmailbox.png" alt="Moneygram Poster" />
    //             </SwiperSlide>
    //             <SwiperSlide className="text-black p-6 rounded-lg shadow-lg w-[250px]">
    //                 <img src="/posters/visa-applications.png" alt="Moneygram Poster" />
    //             </SwiperSlide>
    //             <SwiperSlide className="text-black p-6 rounded-lg shadow-lg w-[250px]">
    //                 <img src="/posters/postbox-rental.png" alt="Moneygram Poster" />
    //             </SwiperSlide>
    //         </Swiper>


    //     </div>
    // </section>
  )
}
