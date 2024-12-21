<<<<<<< HEAD
import React, { useState } from "react";
 
=======

import React, { useState } from "react";

>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
import { Link } from "react-router-dom";
import  Navbar from './nav-item';
 
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
<<<<<<< HEAD
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
 
  return (
 
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 md:p-8 bg-gradient-to-r from-secondary-color to-primary-color">
=======

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (

    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 md:p-8">
>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
      <div className="flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-semibold">
          Pe<span className="text-primary-color">Unique</span>
        </h1>
<<<<<<< HEAD
 
=======

>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>
<<<<<<< HEAD
 
        {/* Navigation Links */}
       <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
=======

        {/* Navigation Links */}
        <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-white md:flex md:static md:w-auto md:gap-8`}
        >
          <Link
            to="/"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            to="/support"
            className="block md:inline-block text-xl p-4 hover:text-secondary-color"
            onClick={() => setIsMenuOpen(false)}
          >
            Support
          </Link>
        </nav>

>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
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
<<<<<<< HEAD
 
=======

>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
      {/* Buttons in the collapsible menu (small screens) */}
      {isMenuOpen && (
        <div className="flex flex-col gap-4 mt-4 md:hidden">
          <a
            href="#"
<<<<<<< HEAD
            className="btn py-3 px-8 ring-2 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
=======
            className="btn py-3 px-8 bg-primary-color text-btn-text-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
          >
            Get Started
          </a>
          <Link
            to="/login"
<<<<<<< HEAD
            className="login py-3 ring-2 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
=======
            className="login py-3 px-8 bg-transparent border-2 border-secondary-color text-secondary-color text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
          >
            Login
          </Link>
        </div>
      )}
    </header>
<<<<<<< HEAD
 
=======

>>>>>>> 59a66f346733ac3bc57d82ff00b8de122aa150b1
   
  );
};
 
export default Header;