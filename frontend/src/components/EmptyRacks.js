import React from 'react';
import RackingSystem from './RackingSystem';

const EmptyRacks = ({ racks, fetchRacks }) => {
  const emptyRacks = racks.filter(rack => rack.packages.length < 2);
  console.log('Empty Racks:', emptyRacks); // Debugging log

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Empty Racks</h2>
      <RackingSystem racks={emptyRacks} fetchRacks={fetchRacks} />
    </div>
  );
};

export default EmptyRacks;