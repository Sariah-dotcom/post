import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { IoIosArrowForward } from "react-icons/io";

export default function Hero() {
  const heroText = useRef();
  const heroBtns = useRef();
  const heroUnderline = useRef();
  const marqueeRef = useRef();

  // Carousel
  function pauseCarousel() {
    
  }

  // Slides array
  const images = [
    '/posters/postbox-rental.png',
    '/heroImgs/hero-2.jpg',
    '/heroImgs/hero-3.jpg',
    '/posters/moneygram.png',
    '/heroImgs/hero-5.jpg',
   '/heroImgs/hero-3.jpg',
    '/posters/usmailbox.png',
    '/heroImgs/hero-5.jpg',
  ];
  const repeatedImages = [...images, ...images]; 

  // Hero Animations
  useGSAP(() => {
    const path = heroUnderline.current.querySelector('path');
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
      opacity: 0
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1,
      ease: "power3",
      delay: 1.6
    });

    gsap.fromTo(
      heroText.current.querySelectorAll('.hero-line'),
      {
        y: 80,
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 0.8,
        y: 0,
        duration: 1.3,
        stagger: 0.4,
        ease: "power3"
      }
    );

    gsap.fromTo(
      heroBtns.current.querySelectorAll('.hero-btns'),
      {
        y: 100,
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.4,
        y: 0,
        duration: 1,
        stagger: 0.5,
        ease: "power3.out"
      }
    );

    gsap.fromTo(
      marqueeRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1.8,
        duration: 1,
        ease: "power3"
      }
    );
  }, []);

  return (
    <section className='flex flex-col gap-10 items-center px-5 overflow-x-hidden '>
      <div className="text-center mt-15 md:mt-30 flex flex-col items-center gap-10" ref={heroText}>
        <h1 className='hero-line text-5xl text-center flex flex-col lg:flex-row lg:gap-5 font-semibold text-(--color-navy) lg:text-8xl'>
          Mail Made
          <span className="relative inline-block">
            Simple
            <svg
              className="absolute -z-1 -bottom-6 lg:-bottom-8 left-0 w-full h-auto"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 40"
              ref={heroUnderline}
            >
              <path
                d="M4.99805 20.9998C65.6267 17.4649 126.268 13.845 187.208 12.8887C226.483 12.2723 265.751 13.2796 304.998 13.9998"
                fill="none"
                stroke="#A0C2F4"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>
        <p className='text-center text-sm lg:text-lg text-gray-600 lg:w-[40%] hero-line'>
          SVG Post is here to keep you connected. Whether you're sending a letter across town or a package across the country, our trusted service combines tradition with modern convenience—delivering reliability, speed, and care every step of the way.
        </p>

        <div className='flex gap-3 lg:gap-5' ref={heroBtns}>
          <button
            className='hero-btns text-sm flex gap-1 items-center justify-center text-white p-3 rounded-full lg:pl-4 lg:pr-3'
            style={{ backgroundColor: 'var(--color-navy)' }}
          >
            Track a Package <IoIosArrowForward />
          </button>
          <button className='hero-btns text-sm flex gap-1 items-center justify-center text-gray-700 bg-gray-300 lg:pl-4 lg:pr-3 p-3 rounded-full'>
            View our Services <IoIosArrowForward />
          </button>
        </div>
      </div>

      

      {/* Carousel */}
      <div>
        <div className="marquee-wrapper mt-5 lg:mt-50" ref={marqueeRef}>
            <div className="marquee-track" onMouseEnter={pauseCarousel()}>
              {repeatedImages.map((src, index) => (
                <div className="marquee-item h-[20rem] w-[15rem] lg:w-[30rem] lg:h-[40rem]" key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="marquee-image" />
                </div>
              ))}
            </div>
        </div>
    <div className=""></div>
      </div>
      <div></div>
      
      
    </section>
  );
}
