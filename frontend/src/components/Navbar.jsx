import React, { useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const dropdownRef = useRef();

useEffect(() => {
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  if (isOpen) {
    document.addEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [isOpen]);


  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLandingNavClick = (id) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scrollToSection(id);
      }, 100);
    } else {
      scrollToSection(id);
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-sm fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="h-10 w-12" />
              <span className="ml-2 text-xl font-semibold text-gray-800">
                Spiritual Activity Club
              </span>
            </Link>
          </div>

          {/* Landing Page Links */}
          <div className="hidden md:flex space-x-4 items-center">
            <button
              onClick={() => handleLandingNavClick("home")}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleLandingNavClick("activities")}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Activities
            </button>
            <button
              onClick={() => handleLandingNavClick("events")}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Events
            </button>
            <button
              onClick={() => handleLandingNavClick("contact")}
              className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </button>
          </div>

          {/* Hamburger */}
          <div className="relative z-50" ref={dropdownRef}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none transition-all duration-200"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>

            {/* Animated Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg transform transition-all duration-300 origin-top-right ${
                isOpen
                  ? "scale-100 opacity-100"
                  : "scale-95 opacity-0 pointer-events-none"
              }`}
            >
              <div className="py-1">
                <Link
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-all"
                >
                  About
                </Link>
                <Link
                  to="/alumni"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-all"
                >
                  Alumni
                </Link>
                <Link
                  to="/team"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-all"
                >
                  Team
                </Link>
                <Link
                  to="/trips"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-purple-50 transition-all"
                >
                  Trips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
