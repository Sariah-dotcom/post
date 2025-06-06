import React, { useRef, useState, useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import gsap from 'gsap';

export default function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.to(contentRef.current, {
        height: 'auto',
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out'
      });
      gsap.to(iconRef.current, {
        rotate: 45,
        duration: 0.3,
        ease: 'power2.out'
      });
    } else {
      gsap.to(contentRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
      gsap.to(iconRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: 'power2.in'
      });
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div className='w-full py-4'>
      <div 
        className='flex items-center justify-between cursor-pointer' 
        onClick={toggleAccordion}
      >
        <h3 className='text-xl font-semibold'>{title}</h3>
        <MdAdd ref={iconRef} className='text-xl transition-transform duration-300' />
      </div>
      <hr className='mt-2 border-[0.1rem]' />
      <div 
        ref={contentRef} 
        style={{ height: 0, overflow: 'hidden', opacity: 0 }}
        className='mt-3 text-gray-700'
      >
        <>{content}</>
      </div>
    </div>
  );
}
