import React from 'react';
import RackingSystem from './RackingSystem';

const OccupiedRacks = ({ racks, fetchRacks }) => {
  if (!racks || !Array.isArray(racks)) {
    return <p>Error: Invalid racks data.</p>; // Handle invalid data
  }

  // Filter racks with exactly 2 packages (fully occupied)
  const occupiedRacks = racks.filter(rack => rack.packages.length === 2);
  console.log('Occupied Racks:', occupiedRacks); // Debugging log

  // Check if any occupied racks are found
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