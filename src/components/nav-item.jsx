import React from 'react';
import { Link } from "react-router-dom";


const NavBar = ({ setIsMenuOpen,isMenuOpen}) => {
    return (
        <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-primary-color md:flex md:static md:w-auto md:gap-32 rounded-2xl px-8`}
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
          to="/about"
          className="block md:inline-block text-xl p-4 hover:text-secondary-color"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
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
    );
};

export default NavBar;
