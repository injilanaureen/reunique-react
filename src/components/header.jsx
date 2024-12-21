
 

import React, { useState } from "react";

import { Link } from "react-router-dom";
import  Navbar from './nav-item';
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };




  return (

    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 md:p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold">
          Pe<span className="text-primary-color">Unique</span>
        </h1>
         {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
       <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>

       

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <a
            href="#"
            className="btn py-3 px-8 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Get Started
          </a>
          <Link
            to="/login"
            className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Login
          </Link>
        </div>
      </div>
 
      {/* Buttons in the collapsible menu (small screens) */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <a
            href="#"
            className="btn py-3 px-8 ring-2 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"

          >
            Get Started
          </a>
          <Link
            to="/login"


            className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Login
          </Link>
        </div>
      )}
    </header>

  );
};
 
export default Header;