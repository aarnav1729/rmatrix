import React from 'react';
import RackRow from './RackRow';

const RackColumn = ({ column, racks, fetchRacks, highlightedSpot, setHighlightedSpot ,handleSearch }) => { 
  const rows = Array.from({ length: 33 }, (_, index) => index + 1);

  return (
    <div className="rack-column border flex flex-col items-center bg-gray-900 object-contain">
      <h2 className="text-center font-bold mb-2 mt-2 text-gray-900 bg-white rounded p-4">{column}</h2> 
      <div className="grid grid-cols-1 w-full">
        {rows.map(row => (
          <RackRow
            key={row}
            row={row}
            stacks={racks.filter(rack => rack.row === row)}
            column={column}
            fetchRacks={fetchRacks}
            highlightedSpot={highlightedSpot}
            setHighlightedSpot={setHighlightedSpot} // Pass down setHighlightedSpot
            handleSearch={handleSearch} // Pass down handleSearch
          />
        ))}
      </div>
    </div>
  );
};

export default RackColumn;
