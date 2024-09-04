import React from 'react';
import RackSpot from './RackSpot';

const RackRow = ({ row, stacks, column, fetchRacks, highlightedSpot, handleSearch }) => { // Accept handleSearch as prop
  const stackPositions = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rack-row grid grid-cols-5 w-full">
      {stackPositions.map(stack => {
        const spot = stacks.find(s => s.stack === stack) || { packages: [] };
        return (
          <RackSpot
            key={stack}
            stack={stack}
            packages={spot.packages}
            column={column}
            row={row}
            fetchRacks={fetchRacks}
            isHighlighted={highlightedSpot && highlightedSpot.column === column && highlightedSpot.row === row && highlightedSpot.stack === stack} // Determine if the spot is highlighted
            handleSearch={handleSearch} // Pass down handleSearch
          />
        );
      })}
    </div>
  );
};

export default RackRow;