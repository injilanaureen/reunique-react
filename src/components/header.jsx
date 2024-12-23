import { useState } from 'react';
import Navbar from './nav-item'; // Import the Navbar component
import logo_img from '../images/icon.png'; // Import the logo
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-white shadow-lg p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center">
        {/* Logo */}
          <img src={logo_img} className='w-[120px] md:w-[200px]'/>

        {/* Hamburger Menu Button (Visible on small screens) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-3xl focus:outline-none"
          aria-label="Toggle Menu"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />

        {/* Buttons for Large Screens */}
        <div className="hidden lg:flex gap-4">
          <a
            href="#"
            className="btn py-3 px-6 sm:px-8 bg-primary-color text-btn-text-color sm:text-lg md:text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Get Started
          </a>
          <a
            href="/login"
            className="login py-3 px-6 sm:px-8 bg-transparent border-2 border-secondary-color text-secondary-color sm:text-lg md:text-xl rounded-full transition-colors duration-300 hover:bg-secondary-color hover:text-white"
          >
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
