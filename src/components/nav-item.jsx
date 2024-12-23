import { Link } from 'react-router-dom';

const Navbar = ({ isMenuOpen, toggleMenu }) => {
  return (
    <nav
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-full left-0 w-full bg-primary-color md:flex md:static md:w-auto md:gap-8 md:px-16 md:py-4 rounded-2xl`}
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
        to="#"
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
