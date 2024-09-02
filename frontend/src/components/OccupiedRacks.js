import React from 'react';
import RackingSystem from './RackingSystem';

const OccupiedRacks = ({ racks, fetchRacks }) => {
  // Ensure racks is not undefined or null
  if (!racks || !Array.isArray(racks)) {
    return <p>Error: Invalid racks data.</p>;
  }

  // Filter racks with exactly 2 packages
  const occupiedRacks = racks.filter(rack => rack.packages.length === 2);
  console.log('Occupied Racks:', occupiedRacks); // Debugging log

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Occupied Racks</h2>
      <RackingSystem racks={occupiedRacks} fetchRacks={fetchRacks} />
    </div>
  );
};

export default OccupiedRacks;