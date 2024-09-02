import React from 'react';
import RackingSystem from './RackingSystem';

const EmptyRacks = ({ racks }) => { // Ensure racks prop is correctly received
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Empty Racks</h2>
      {racks.length > 0 ? (
        <RackingSystem racks={racks} fetchRacks={() => {}} />  
      ) : (
        <p>No empty racks available.</p>
      )}
    </div>
  );
};

export default EmptyRacks;