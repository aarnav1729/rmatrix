// src/components/RackRow.js

import React from 'react';
import RackSpot from './RackSpot';

const RackRow = ({ row, stacks, column, fetchRacks, highlightedSpot, setHighlightedSpot, isSpotOccupied, handleSearch }) => {
  const stackPositions = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rack-row grid grid-cols-5 w-full mr-2 object-contain">
      {stackPositions.map(stack => {
        const spot = stacks.find(s => s.stack === stack) || { packages: [] };
        const opacityStyle = isSpotOccupied(column, row, stack) ? { opacity: 0 } : {};

        return (
          <RackSpot
            key={stack}
            stack={stack}
            packages={spot.packages}
            column={column}
            row={row}
            fetchRacks={fetchRacks}
            isHighlighted={highlightedSpot && highlightedSpot.column === column && highlightedSpot.row === row && highlightedSpot.stack === stack}
            setHighlightedSpot={setHighlightedSpot}
            handleSearch={handleSearch}
            style={opacityStyle} // Apply the style for opacity
          />
        );
      })}
    </div>
  );
};

export default RackRow;