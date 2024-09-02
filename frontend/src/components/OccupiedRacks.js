import React, { useEffect, useState } from 'react';
import RackingSystem from './RackingSystem';

const OccupiedRacks = ({ racks, fetchRacks }) => {
  const [occupiedRacks, setOccupiedRacks] = useState([]);

  useEffect(() => {
    if (racks && Array.isArray(racks)) {
      const filteredRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length === 2);
      setOccupiedRacks(filteredRacks);
      console.log('Filtered Occupied Racks:', filteredRacks); // Debugging log
    }
  }, [racks]);

  if (!occupiedRacks || occupiedRacks.length === 0) {
    return <p>No occupied racks available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Occupied Racks</h2>
      <RackingSystem racks={occupiedRacks} fetchRacks={fetchRacks} />
    </div>
  );
};

export default OccupiedRacks;