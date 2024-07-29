import { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "../assets/F.png";

import "../Styles/Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          <Link to="/" id="logo" className="flex items-center">
            <img src={Logo} alt="Descending" className="logo mr-2" />
            Descending
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white">
            {isOpen ? <FaTimes className="cross-icon" /> : <FaBars />}
          </button>
        </div>
        <div
          className={`md:flex md:items-center md:space-x-4 ${
            isOpen ? "flex" : "hidden"
          } flex-col md:flex-row items-center w-full md:w-auto`}
        >
          <Link
            to="/"
            className="text-white hover:text-gray-400 py-2 md:py-0"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:text-gray-400 py-2 md:py-0"
            onClick={toggleMenu}
          >
            About Us
          </Link>
          <Link
            to="/services"
            className="text-white hover:text-gray-400 py-2 md:py-0"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-gray-400 py-2 md:py-0"
            onClick={toggleMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/product"
            className="text-white hover:text-gray-400 py-2 md:py-0"
            onClick={toggleMenu}
          >
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
