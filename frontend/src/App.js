import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RackingSystem from './components/RackingSystem';
import SearchBar from './components/SearchBar';

function App() {
  const [racks, setRacks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/racks')
      .then(response => {
        setRacks(response.data);
      });
  }, []);

  const handleSearch = (qrCode) => {
    axios.get(`http://localhost:5000/api/racks/search?qrCode=${qrCode}`)
      .then(response => {
        alert(`QR Code found at: ${response.data.location}`);
      })
      .catch(error => {
        alert('QR Code not found');
      });
  };

  return (
    <div className="App p-4">
      <SearchBar onSearch={handleSearch} />
      <RackingSystem racks={racks} />
    </div>
  );
}

export default App;