import React from 'react';
import RackRow from './RackRow';

const RackColumn = ({ column, racks, fetchRacks, highlightedSpot, handleSearch }) => { 
  const rows = Array.from({ length: 33 }, (_, index) => index + 1);

  return (
    <div className="rack-column border flex flex-col items-center bg-gray-900 object-contain">
      <h2 className="text-center font-bold mb-4 text-white">{column}</h2> 
      <div className="grid grid-cols-1 w-full">
        {rows.map(row => (
          <RackRow
            key={row}
            row={row}
            stacks={racks.filter(rack => rack.row === row)}
            column={column}
            fetchRacks={fetchRacks}
            highlightedSpot={highlightedSpot}
            handleSearch={handleSearch} // Pass down handleSearch
          />
        ))}
      </div>
    </div>
  );
};

export default RackColumn;