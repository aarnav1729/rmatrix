import React from 'react';
import { Link } from 'react-router-dom'

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <header className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">RM Racking</Link>

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