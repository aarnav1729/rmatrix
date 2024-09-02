import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RackingSystem from './RackingSystem';

const OccupiedRacks = () => {
  const [occupiedRacks, setOccupiedRacks] = useState([]);

  const fetchRacks = async () => {
    try {
      const response = await axios.get('https://rmatrix.onrender.com/api/racks');
      const racks = response.data;
      // Filter only occupied racks
      const filteredRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length === 2);
      setOccupiedRacks(filteredRacks);
      console.log('Filtered Occupied Racks:', filteredRacks); // Debugging log
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };

  useEffect(() => {
    fetchRacks(); // Fetch racks when component mounts
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Occupied Racks</h2>
      {occupiedRacks.length > 0 ? (
        <RackingSystem racks={occupiedRacks} fetchRacks={fetchRacks} />
      ) : (
        <p>No occupied racks available.</p>
      )}
    </div>
  );
};

export default OccupiedRacks;