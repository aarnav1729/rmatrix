import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RackingSystem from './RackingSystem';

const EmptyRacks = () => {
  const [emptyRacks, setEmptyRacks] = useState([]);

  const fetchRacks = async () => {
    try {
      const response = await axios.get('https://rmatrix.onrender.com/api/racks');
      const racks = response.data;
      // Filter only empty racks
      const filteredRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length < 2);
      setEmptyRacks(filteredRacks);
      console.log('Filtered Empty Racks:', filteredRacks); // Debugging log
    } catch (error) {
      console.error('Error fetching racks:', error);
    }
  };

  useEffect(() => {
    fetchRacks(); // Fetch racks when component mounts
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Empty Racks</h2>
      {emptyRacks.length > 0 ? (
        <RackingSystem racks={emptyRacks} fetchRacks={fetchRacks} />
      ) : (
        <p>No empty racks available.</p>
      )}
    </div>
  );
};

export default EmptyRacks;