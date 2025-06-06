import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
  return (
    <footer className='bg-black px-5 md:pt-10 pb-5 text-white flex flex-col gap-8 lg:px-40'>
        <div className="footer-branding mt-5 md:mt-20 p-15 text-center flex flex-col items-center lg:p-0 lg:mb-20">
            <img className='lg:h-40' src="/logo-white-2.png" alt="SVG Post Logo" />
            {/* <p className='font-semibold text-sm mt-5'>St.Vincent and the Grenadines Postal Corporation</p> */}
        </div>

        <div className="footer-links flex flex-col gap-10 lg:flex-row lg:justify-between">
            <div className="footer-link-group">
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

            <div className="footer-link-group">
                <h2>Quick Links</h2>
                <ul>
                    <li>Postbox Rental Form</li>
                    <li>US Mailbox Application Form</li>
                </ul>
            </div>

            <div className="footer-link-group">
                <h2>Contact</h2>
                <ul>
                    <li>Utility Bill Payments</li>
                   
                </ul>
            </div>
        </div>

        <div className="copyright text-center text-xs">SVG Postal Corporation © {year}</div>
    </footer>
  )
}
