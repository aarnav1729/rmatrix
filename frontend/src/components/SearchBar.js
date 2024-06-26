import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-bar p-4 flex justify-center">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter QR Code"
        className="border p-2 mr-2"
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2">Search</button>
    </div>
  );
};

export default SearchBar;
