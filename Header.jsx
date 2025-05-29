import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen((prev) => !prev);
  }

  return (
    <nav className="flex justify-between sticky w-full -top-1 z-40 items-center px-3 py-5 bg-white shadow-sm lg:px-20 ">
      {/* Logo */}
      <Link to='/'>
        <img className="h-11 lg:h-15" src="/logo.png" alt="svg-post-logo" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-10 text-sm">
        <Link to="/" >Home</Link>
        <Link to="/About" >About Us</Link>
        <Link to="/Services" >Services</Link>
        <Link to="/Rates" >Rates</Link>
        <Link to="/Contact" >Contact</Link>
      </div>

      {/* Menu Icon */}
      <IoMenu className="text-3xl cursor-pointer md:hidden text-[#03154E]" onClick={toggleMenu} />

      {/* Sliding Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#001A6E] text-white p-5 z-50 transition-transform duration-300 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Close Button */}
        <IoMdClose className="text-3xl ml-auto cursor-pointer" onClick={toggleMenu} />

        {/* Menu Links */}
        <div className="mt-10 flex flex-col gap-6 text-lg font-semibold">
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/services" onClick={toggleMenu}>Services</Link>
          <Link to="/rates" onClick={toggleMenu}>Rates</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

