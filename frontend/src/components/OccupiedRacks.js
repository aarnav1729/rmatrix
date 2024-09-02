import React, { useEffect, useState } from 'react';
import RackingSystem from './RackingSystem';

const OccupiedRacks = ({ racks, fetchRacks }) => {
  const [occupiedRacks, setOccupiedRacks] = useState([]);

  useEffect(() => {
    // Check if racks is an array and filter correctly
    if (racks && Array.isArray(racks)) {
      const filteredRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length === 2);
      setOccupiedRacks(filteredRacks);
      console.log('Filtered Occupied Racks:', filteredRacks); // Debugging log
    }
  }, [racks]);

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