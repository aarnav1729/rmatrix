import React from 'react';
import RackingSystem from './RackingSystem';

const OccupiedRacks = ({ racks, fetchRacks }) => {
  if (!racks || !Array.isArray(racks)) {
    console.log('Invalid racks data:', racks); // Debugging output
    return <p>Error: Invalid racks data.</p>;
  }

  // Filter racks with exactly 2 packages (fully occupied)
  const occupiedRacks = racks.filter(rack => Array.isArray(rack.packages) && rack.packages.length === 2);
  console.log('Filtered Occupied Racks:', occupiedRacks); // Debugging log

  if (occupiedRacks.length === 0) {
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