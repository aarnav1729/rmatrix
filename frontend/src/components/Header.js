import React, { useState } from 'react';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Racking System</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Features</a></li>
          <li><a href="#" className="hover:underline">Pricing</a></li>
          <li><a href="#" className="hover:underline">Learn</a></li>
          <li><a href="#" className="hover:underline">Community</a></li>
        </ul>
      </nav>
      <div className="flex">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search"
          className="bg-gray-700 p-2 rounded mr-2"
        />
        <button onClick={handleSearch} className="bg-blue-500 text-white p-2 rounded">Search</button>
      </div>
    </header>
  );
};

export default Header;