import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import Button from './Button';

export default function Hero() {
  const heroText = useRef();
  const heroBtns = useRef();
  const heroUnderline = useRef();

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
      heroBtns.current,
      {
        x: -100,
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 2.5,
        x: 0,
        duration: 0.5,
        stagger: 0.4,
        ease: "power3"
      }
    );
  }, []);

  return (
    <section className='flex flex-col gap-10 h-[70vh] justify-center items-center px-5 overflow-x-hidden'>
      {/* <img className='absolute -z-1 opacity-20  w-[100vw]' src="\bg-2.png" alt="" /> */}
      <div className="hero-imgs absolute border h-full w-full flex items-center px-20 -z-1">
          <div className="one bg-(--color-navy) h-[10rem] w-[15rem] rounded-[1rem] -rotate-20"></div>
      </div>
      <div className="md:text-center mt-15 md:mt-30 flex flex-col md:items-center gap-10" ref={heroText}>
        <h1 className='hero-line text-6xl md:text-center flex flex-col lg:flex-row lg:gap-5 font-semibold text-(--color-navy) lg:text-8xl md:text-7xl'>
          Mail Made
          <span className="relative inline-block">
            Simple
            <svg
              className="absolute -z-1 -bottom-6 lg:-bottom-8 left-0 md:w-full w-[60%] h-auto"
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
        <p className='text-sm text-justify md:text-center px-2 lg:text-lg text-gray-600 md:w-[70%] lg:w-[40%] hero-line'>
          Whether you're sending a letter across town or a package across the world, SVG Post combines tradition with modern convenience—delivering reliability, speed, and care every step of the way.
        </p>

      {/* CTA Buttons */}
        <div className='flex gap-3 lg:gap-7 mt-5 md:mt-0' ref={heroBtns}>
          <Button  className='hero-btns'
           text = "Track a Package"
           textColor = "text-white"
           bgColor ="bg-[#001A6E]"
          />

           <Button className='hero-btns'
           text = "View our Services"
           textColor = "text-gray-700"
           bgColor ="bg-gray-300"
          />
        </div>
      </div>

      {/* Carousel */}
      {/* <div>
        <div className="marquee-wrapper mt-5 lg:mt-50">
            <div className="marquee-track">
              {repeatedImages.map((src, index) => (
                <div className="marquee-item h-[20rem] w-[15rem] lg:w-[30rem] lg:h-[40rem]" key={index}>
                  <img src={src} alt={`Slide ${index + 1}`} className="marquee-image" />
                </div>
              ))}
            </div>
        </div> */}
    
      
    </section>
  );
}
