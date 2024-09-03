import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Logo from '../assets/2bg.png'; // Update this with your actual logo path

const Header = ({ onSearch }) => {
  const [openNav, setOpenNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchTerm, setSearchTerm] = useState(''); // State for search input

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/info', label: 'Info' }
  ];

  const toggleNav = () => setOpenNav(!openNav);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSearchTerm(''); // Clear search input after searching
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`sticky top-0 z-10 transition-all ease-in duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <nav className="w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          {/* Main container to keep everything in one line */}
          <div className="flex items-center justify-between py-3 md:py-4">
            {/* Left-aligned logo */}
            <div className="flex items-center">
              <Link to="/" aria-label="logo" className="flex items-center space-x-2">
                <img
                  src={Logo}
                  alt="Logo"
                  className={`transition-all duration-300 ${scrolled ? 'h-12' : 'h-10'} md:h-12`}
                />
              </Link>
            </div>

            {/* Center-aligned search bar */}
            <div className="flex items-center justify-center mx-auto">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Enter QR Code"
                className={`bg-gray-700 text-white p-2 rounded mr-2 transition ${scrolled ? 'border border-black' : ''} w-24 sm:w-36 md:w-48`} // Adjusted width for better responsiveness
              />
              <button
                onClick={handleSearch}
                className={`hover:bg-blue-700 font-bold relative flex h-9 items-center justify-center px-3 py-2 rounded-xl before:absolute before:inset-0 before:rounded-xl before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max ${scrolled ? 'bg-blue-600 text-white' : 'bg-blue-600 text-white'}`}
              >
                <FontAwesomeIcon icon={faSearch} /> {/* Search Icon */}
              </button>
            </div>

            {/* Right-aligned navigation links */}
            <div className="hidden lg:flex items-center space-x-6">
              <ul className={`flex gap-6 tracking-wide lg:flex-row lg:gap-4 lg:text-sm ${scrolled ? 'text-black' : 'text-white'}`}>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className={`hover:text-indigo-600 hover:bg-white p-2 rounded font-bold block transition ${scrolled ? 'text-black' : 'text-white'} hover:text-secondary`}
                      onClick={() => setOpenNav(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger menu for mobile view */}
            <div className="relative flex max-h-10 items-center lg:hidden z-30"> {/* Adjusted z-index */}
              <button
                aria-label="hamburger"
                id="hamburger"
                className="relative p-6 z-30" // Ensure button is on top of the backdrop 
                onClick={toggleNav}
              >
                <div
                  aria-hidden="true"
                  id="line"
                  className={`m-auto h-0.5 w-5 rounded transition ease-in duration-300 ${scrolled ? 'bg-black' : 'bg-sky-900'} ${openNav ? 'rotate-45 translate-y-1.5 bg-black' : ''}`} // Ensure visibility of "X"
                ></div>
                <div
                  aria-hidden="true"
                  id="line2"
                  className={`m-auto mt-2 h-0.5 w-5 rounded transition ease-in duration-300 ${scrolled ? 'bg-black' : 'bg-sky-900'} ${openNav ? '-rotate-45 -translate-y-1 bg-black' : ''}`} // Ensure visibility of "X"
                ></div>
              </button>
            </div>
          </div>

          {/* Mobile navigation menu */}
          <div
            id="navLayer"
            aria-hidden="true"
            className={`fixed inset-0 z-20 h-screen w-screen origin-bottom scale-y-0 bg-transparent backdrop-blur-2xl transition duration-500 lg:hidden ${openNav ? 'scale-y-100' : ''}`} // Adjusted z-index to be lower than the button 
          ></div>
          <div
            id="navlinks"
            className={`absolute right-0 z-20 flex flex-col lg:hidden items-center gap-6 origin-top-right translate-y-1 scale-90 rounded-3xl border border-gray-100 bg-gray-700 p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all ease-in duration-300 lg:visible lg:translate-y-0 lg:scale-100 lg:border-none lg:p-0 lg:opacity-100 lg:shadow-none ${scrolled ? 'lg:bg-transparent' : 'lg:bg-transparent'} ${openNav ? '!visible !scale-100 !opacity-100' : 'dark:bg-transparent'}`}
          >
            <ul className={`flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm ${scrolled ? 'text-black' : 'text-white'}`}>
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className={`hover:text-indigo-600 hover:bg-white p-2 rounded font-bold block transition ${scrolled ? 'text-black' : 'text-white'} hover:text-secondary md:px-4`}
                    onClick={() => setOpenNav(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;