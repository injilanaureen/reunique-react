import { Link } from 'react-router-dom';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav
      className={`${
        isMenuOpen ? "block" : "hidden"
      } w-full bg-primary-color lg:flex lg:gap-16 rounded-2xl px-16 py-4 lg:w-auto`}
    >
      <Link
        to="/"
        className="block sm:text-lg md:text-xl lg:inline-block p-4 lg:p-0 hover:text-secondary-color"
        onClick={toggleMenu}
      >
        Home
      </Link>
      <Link
        to="/about"
        className="block sm:text-lg md:text-xl lg:inline-block p-4 lg:p-0 hover:text-secondary-color"
        onClick={toggleMenu}
      >
        About
      </Link>
      <Link
        to="/pricing"
        className="block sm:text-lg md:text-xl lg:inline-block p-4 lg:p-0 hover:text-secondary-color"
        onClick={toggleMenu}
      >
        Pricing
      </Link>
      <Link
        to="/contact"
        className="block sm:text-lg md:text-xl lg:inline-block p-4 lg:p-0 hover:text-secondary-color"
        onClick={toggleMenu}
      >
        Contact
      </Link>
      <Link
        to="/support"
        className="block sm:text-lg md:text-xl lg:inline-block p-4 lg:p-0 hover:text-secondary-color"
        onClick={toggleMenu}
      >
        Support
      </Link>
    </nav>
  );
};

export default Navbar;
