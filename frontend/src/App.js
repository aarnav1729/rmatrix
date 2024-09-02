import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import RackingSystem from './components/RackingSystem';
import Info from './components/Info';

function App() {
  const [racks, setRacks] = useState([]);

  useEffect(() => {
    fetchRacks();
  }, []);

  const fetchRacks = async () => {
    try {
      const response = await axios.get('https://rmatrix.onrender.com/api/racks');
      setRacks(response.data); 
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };
  

  const handleSearch = (qrCode) => {
    axios.get(`https://rmatrix.onrender.com/api/racks/search?qrCode=${qrCode}`)
      .then(response => {
        alert(`QR Code found at: ${response.data.location}`);
      })
      .catch(error => {
        alert('QR Code not found');
      });
  };

  const totalSpots = 1320;
  const occupiedSpots = racks.reduce((acc, rack) => acc + rack.packages.length, 0);
  const openSpots = totalSpots - occupiedSpots;

  return (
    <div className="App flex flex-col min-h-screen bg-gray-900 text-white">
      <Header onSearch={handleSearch} />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={
            <>
              <Dashboard total={totalSpots} open={openSpots} occupied={occupiedSpots} />
              <RackingSystem racks={racks} fetchRacks={fetchRacks} />
            </>
          } />
          <Route path="/info" element={<Info />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;