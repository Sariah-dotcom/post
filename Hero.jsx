import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react';
import { GoArrowUpRight } from "react-icons/go";
import { Link } from 'react-router-dom';

export default function Hero() {
  const heroText = useRef();
  const heroImg = useRef();
  const heroBg = useRef();
  const heroUnderline = useRef();


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
      opacity:1,
      duration: 1,
      ease: "power3",
      delay: 1 // adjust to sync with text animation
    });

    gsap.fromTo(
      heroText.current.querySelectorAll('.hero-line'),
      {
        y: 80,
        opacity: 0,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.3,
        stagger: 0.2,
        ease: "power3"
      }
    );

    gsap.fromTo(heroImg.current.querySelectorAll('.hero-imgs'),
      {
        y: -300,
        opacity: 0
      }, 
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        stagger: 0.3,
        ease: "power3"
      }
    );
  }, []);

  return (
    <section className='p-3 md:p-5 flex items-center lg:h-[90vh]'>
      <div className='p-3 w-full flex flex-col gap-10 lg:flex-row lg:items-center lg:h-[80vh] lg:px-50 lg:py-0 lg:gap-5  rounded-[1rem] hero-bg' ref={heroBg}>
        {/* Hero text */}
        <div className="left h-1/2 flex flex-col gap-3 pt-20 lg:pt-0 lg:w-1/2" ref={heroText}>
          <h1 className='text-6xl font-semibold lg:text-8xl hero-line text-[#001A6E]'>
            Mail Made <br />
            <span className="relative inline-block">
              Simple
              <svg
                className="absolute left-0 md:-bottom-8 w-full h-auto"
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

          <h2 className='font-medium lg:text-xl xl:text-2xl hero-line text-[#001A6E] mt-4'>Track, Send, and Receive with Confidence</h2>
          <p className='text-gray-500 mt-3 lg:w-[80%] hero-line'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque rem incidunt provident possimus placeat? Sint nisi dicta nulla illo, aliquid ab.
          </p>
          <Link to="/" className='mt-2 group flex items-center gap-1 text-lg underline text-[#001A6E] font-semibold hover:text-[#A0C2F4] hero-line'>
            Track a Package <GoArrowUpRight className='group-hover:ml-1' />
          </Link>
        </div>

        {/* Hero Images */}
        <div className="right w-full lg:h-[80%] lg:w-1/2 flex justify-center items-center mt-10" ref={heroImg}>
          <img src="/blob.png" className='h-90 md:h-auto hero-imgs' alt="" />
          <img src="/hero-img-1.png" className='absolute h-100 md:h-auto hero-imgs' alt="" />
        </div>
      </div>
    </section>
  );
}
