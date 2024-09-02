import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import RackingSystem from './components/RackingSystem';
import Info from './components/Info';
import EmptyRacks from './components/EmptyRacks'; // Correct import
import OccupiedRacks from './components/OccupiedRacks'; // Correct import

function App() {
  const [racks, setRacks] = useState([]);
  const [emptyRacks, setEmptyRacks] = useState([]); // State for empty racks
  const [occupiedRacks, setOccupiedRacks] = useState([]); // State for occupied racks

  useEffect(() => {
    fetchRacks();
  }, []);

  // Fetch racks data and update state
  const fetchRacks = async () => {
    try {
      const response = await axios.get('https://rmatrix.onrender.com/api/racks');
      setRacks(response.data);
      console.log('Fetched Racks:', response.data); // Debugging log
      filterRacks(response.data); // Call filterRacks after fetching
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };

  // Filter racks into empty and occupied arrays
  const filterRacks = (racksData) => {
    const empty = racksData.filter(rack => Array.isArray(rack.packages) && rack.packages.length < 2);
    const occupied = racksData.filter(rack => Array.isArray(rack.packages) && rack.packages.length === 2);
    setEmptyRacks(empty);
    setOccupiedRacks(occupied);
    console.log('Filtered Empty Racks:', empty); // Debugging log
    console.log('Filtered Occupied Racks:', occupied); // Debugging log
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
          {/* Pass filtered racks to EmptyRacks and OccupiedRacks */}
          <Route path="/empty-racks" element={<EmptyRacks racks={emptyRacks} />} />
          <Route path="/occupied-racks" element={<OccupiedRacks racks={occupiedRacks} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;