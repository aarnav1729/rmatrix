import React, { useEffect, useState } from 'react';
import RackingSystem from './RackingSystem';

const EmptyRacks = ({ racks, fetchRacks }) => {
  const [emptyRacks, setEmptyRacks] = useState([]);

  useEffect(() => {
    // Check if racks is an array and filter correctly
    if (racks && Array.isArray(racks)) {
      const filteredRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length < 2);
      setEmptyRacks(filteredRacks);
      console.log('Filtered Empty Racks:', filteredRacks); // Debugging log
    }
  }, [racks]);

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