import React from 'react'
import PageHeader from '../components/PageHeader'
import Accordion from '../components/Accordion'
import ServiceDetails from '../components/ServiceDetails'

import { FaMoneyBills, FaMoneyBillTransfer, FaLocationDot, FaPlaneDeparture} from "react-icons/fa6";
import { BsPostageHeartFill } from "react-icons/bs";
import { GiPostStamp } from "react-icons/gi";
import { RiMailSendFill } from "react-icons/ri";
import { PiMailboxFill, PiLockersFill } from "react-icons/pi";
import { FaMailBulk, FaTruck } from "react-icons/fa";
import { MdOutlineAttachMoney,MdPhonelinkRing } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";


export default function Services() {
  return (
    <div className='flex flex-col gap-[3rem] lg:gap-[5rem]'>
      <PageHeader pageTitle="Services"/>

      <div className='p-5 flex flex-col items-center gap-[5rem]'>
        <div className="lg:w-[70%]">
            <h2 className='font-semibold text-2xl text-[#001A6E] md:text-4xl mb-5'>Important Notice:</h2>
            <p className='text-gray-800'>
              Please be advised  that based on the local, regional and international laws and regulations that the SVG Postal Corporation (member of the Universal Postal Union) is guided by, 
              <span className='font-bold'> a valid form of Identification must be presented by the Customer</span> to complete certain transactions.
              <br/> <br />
              Any transaction that requires the presentation of a valid form of Identification cannot be completed by the postal officer, unless one of the following forms of identification 
              is presented by the Customer: 
            </p>
            <ol className=''>
              <li>Passport</li>
              <li>National Identification Card</li>
              <li>Drivers License</li>
              <li>Farmer's ID</li>
              <li></li>
            </ol>
        </div>

        <div className=" lg:w-[70%] flex flex-col gap-10">
          <h2 className='font-semibold text-gray-700 text-2xl lg:text-3xl text-center lg:text-left'>Our Services include:</h2>
          
          <ServiceDetails 
            title = "Sale of Postage Stamps"
            icon = {<GiPostStamp />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "Track and Trace of Mail Items"
            icon = {<FaLocationDot />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "Postbox Rental"
            icon = {<PiLockersFill />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "MoneyGram Money Transfers"
            icon = {<FaMoneyBillTransfer />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "US Mailbox Service"
            icon = {<PiMailboxFill />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "Philately"
            icon = {<BsPostageHeartFill />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "US and Canadian Temporary Visa Application"
            icon = {<FaPlaneDeparture />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "Utility Bills Payment"
            icon = {<FaMoneyBills />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          /> 
          
          <ServiceDetails 
            title = "Lotto Sales"
            icon = {<MdOutlineAttachMoney />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

          <ServiceDetails 
            title = "Flow and Digicel Top-Up"
            icon = {<MdPhonelinkRing />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />

           <ServiceDetails 
            title = "Agency Services for DHL"
            icon = {<FaTruck />}
            description = "We offer the sale of stamps for the following mail classes: Ordinary Mail, Trackable Registered Mail, Trackable Packets, Trackable Parcels"
          />
        </div>
      </div>

      
    </div>
  )
}
