import React from 'react';
import RackingSystem from './RackingSystem';

const EmptyRacks = ({ racks, fetchRacks }) => {
  if (!racks || !Array.isArray(racks)) {
    console.log('Invalid racks data:', racks); // Debugging output
    return <p>Error: Invalid racks data.</p>;
  }

  // Filter racks with fewer than 2 packages (empty or partially filled)
  const emptyRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length < 2);
  console.log('Filtered Empty Racks:', emptyRacks); // Debugging log

  if (emptyRacks.length === 0) {
    return <p>No empty racks available.</p>;
  }

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Empty Racks</h2>
      <RackingSystem racks={emptyRacks} fetchRacks={fetchRacks} />
    </div>
  );
};

export default EmptyRacks;