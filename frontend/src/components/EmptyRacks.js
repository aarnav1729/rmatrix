import React from 'react';
import RackingSystem from './RackingSystem';

const EmptyRacks = ({ racks, fetchRacks }) => {
  if (!racks || !Array.isArray(racks)) {
    return <p>Error: Invalid racks data.</p>; // Handle invalid data
  }

  const emptyRacks = racks.filter(rack => rack.packages.length < 2);
  console.log('Empty Racks:', emptyRacks); // Debugging log

  // Check if any empty racks are found
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