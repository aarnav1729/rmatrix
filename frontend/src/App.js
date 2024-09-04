import React, { useState, useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import RackingSystem from './components/RackingSystem';
import Info from './components/Info';
import BackToTop from './components/BackToTop';

function App() {
  const [racks, setRacks] = useState([]);
  const [highlightedSpot, setHighlightedSpot] = useState(null); // New state for highlighted spot

  useEffect(() => {
    fetchRacks();
  }, []);

  // Fetch racks data and update state
  const fetchRacks = async () => {
    try {
      const response = await axios.get('https://rmatrix.onrender.com/api/racks');
      setRacks(response.data);
      console.log('Fetched Racks:', response.data); // Debugging log
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };

  const handleSearch = (qrCode) => {
    axios.get(`https://rmatrix.onrender.com/api/racks/search?qrCode=${qrCode}`)
      .then(response => {
        alert(`QR Code found at: ${response.data.location}`);
        const [column, row, stack] = response.data.location.split('-'); // Parse the location string
        setHighlightedSpot({ column, row: Number(row), stack: Number(stack) }); // Set the highlighted spot
      })
      .catch(error => {
        alert('QR Code not found');
        setHighlightedSpot(null); // Clear highlight if not found
      });
  };

  const totalSpots = 1320;
  const occupiedSpots = racks.reduce((acc, rack) => acc + rack.packages.length, 0);
  const openSpots = totalSpots - occupiedSpots;

  // References for scrolling to racks
  const rackRefs = {
    B1: useRef(null),
    B2: useRef(null),
    B3: useRef(null),
    B4: useRef(null),
  };

  return (
    <div className="App flex flex-col min-h-screen bg-gray-900 text-white">
      <Header onSearch={handleSearch} />
      <main className="flex-grow p-4">
        <Routes>
          <Route path="/" element={
            <>
              <Dashboard total={totalSpots} open={openSpots} occupied={occupiedSpots} rackRefs={rackRefs} />
              <RackingSystem racks={racks} fetchRacks={fetchRacks} highlightedSpot={highlightedSpot} rackRefs={rackRefs} setHighlightedSpot={setHighlightedSpot} handleSearch={handleSearch} /> {/* Pass handleSearch */}
            </>
          } />
          <Route path="/info" element={<Info />} />
        </Routes>
        <BackToTop />
      </main>
      <Footer />
    </div>
  );
}

export default App;