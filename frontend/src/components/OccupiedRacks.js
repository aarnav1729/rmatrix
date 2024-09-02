import React from 'react';
import RackingSystem from './RackingSystem';

const OccupiedRacks = ({ racks }) => { // Ensure racks prop is correctly received
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Occupied Racks</h2>
      {racks.length > 0 ? (
        <RackingSystem racks={racks} fetchRacks={() => {}} /> 
      ) : (
        <p>No occupied racks available.</p>
      )}
    </div>
  );
};

export default OccupiedRacks;