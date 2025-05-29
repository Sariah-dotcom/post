import React from 'react'

export default function Footer() {
  return (
    <footer className='bg-[#03154E] px-5 pt-10 pb-5 text-white flex flex-col gap-10 lg:px-40'>
        <div className="footer-branding mt-20 p-15 text-center flex flex-col items-center lg:text-left lg:items-baseline lg:p-0 lg:mb-20">
            <img src="/logo-white.png" alt="" />
            <p className='font-semibold text-sm mt-5'>St.Vincent and the Grenadines Postal Corporation</p>
        </div>

        <div className="footer-links flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="link">
                <h2>Services</h2>
                <ul>
                    <li>Utility Bill Payments</li>
                    <li>Express Mail Services</li>
                    <li>MoneyGram Services</li>
                    <li>US Mailbox</li>
                    <li>Visa Applications</li>
                    <li>Postbox Rental</li>
                </ul>
            </div>

            <div className="link">
                <h2>Quick Links</h2>
                <ul>
                    <li>Postbox Rental Form</li>
                    <li>US Mailbox Application Form</li>
                </ul>
            </div>

            <div className="link">
                <h2>Contact</h2>
                <ul>
                    <li>Utility Bill Payments</li>
                   
                </ul>
            </div>
        </div>

        <div className="copyright text-center text-xs">SVG Postal Corporation © 2025</div>
    </footer>
  )
}
