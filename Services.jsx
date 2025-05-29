import React from 'react';
import Card from './Card';
import { FaMoneyBills, FaMoneyBillTransfer } from "react-icons/fa6";
import { BsPostageHeartFill } from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { RiMailSendFill } from "react-icons/ri";
import { PiMailboxFill, PiLockersFill } from "react-icons/pi";
import { FaMailBulk } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section className="flex flex-col px-4 w-full">

      <div className="flex justify-center">
        <div className="lg:w-[80%] flex flex-col lg:flex-row lg:justify-between items-center lg:p-5 lg:mb-[3rem]">
          <SectionHeading heading="Our Services"/>
          <button className='flex gap-1 text-white bg-blue-900 px-3 py-2 rounded items-center'>View all <GoArrowUpRight /></button>
        </div>
          
      </div>
      
      <div className="lg:gap-5 card-container py-10 flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 lg:flex-col lg:items-center">
       <div className="flex gap-5 lg:flex lg:w-full lg:gap-30 lg:justify-center">
          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<FaMoneyBills />}
              title="Utility Bill Payments"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
          
          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<RiMailSendFill />}
              title="Express Mail Service"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<FaMailBulk />}
              title="Registration"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<PiMailboxFill />}
              title="US Mailbox Service"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
       </div>

        <div className="flex gap-5 lg:flex lg:w-full lg:gap-30 lg:justify-center">
          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<PiLockersFill />}
              title="Postbox Rental"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<FaMoneyBillTransfer />}
              title="MoneyGram"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<GiPostStamp />}
              title="Stamp Sales"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>

          <div className="snap-start shrink-0 w-64">
            <Card 
              icon={<BsPostageHeartFill />}
              title="Philately"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
