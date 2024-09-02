import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 p-4 flex flex-col md:flex-row md:justify-between items-center">
      <div className="flex justify-between w-full md:w-auto items-center">
        <button className="text-white block md:hidden" onClick={toggleMenu}>
          <i className="fas fa-bars"></i>
        </button>
        <Link to="/" className="text-2xl font-bold hidden md:block ml-2">
          RM Racking
        </Link>
      </div>

      <nav
        className={`flex-col md:flex-row md:flex items-center space-x-4 ${
          isMenuOpen ? 'flex' : 'hidden md:flex'
        }`}
      >
        <Link to="/" className="text-white hover:underline md:mt-0 mt-2">
          Home
        </Link>
        <Link to="/empty-racks" className="text-white hover:underline md:mt-0 mt-2">
          Empty Racks
        </Link>
        <Link to="/occupied-racks" className="text-white hover:underline md:mt-0 mt-2">
          Occupied Racks
        </Link>
        <Link to="/info" className="text-white hover:underline md:mt-0 mt-2">
          Info
        </Link>
      </nav>

      <div className="flex mt-4 md:mt-0">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="bg-gray-700 p-2 rounded mr-2"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Search
        </button>
      </div>
    </header>
  );
};

export default Header;