import React from 'react';
import RackSpot from './RackSpot';

const RackRow = ({ row, stacks, column, fetchRacks, highlightedSpot, setHighlightedSpot, handleSearch, fullSpots, isFullSpotHidden }) => { // Accept handleSearch as prop
  const stackPositions = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rack-row grid grid-cols-5 w-full mr-2 object-contain">
      {stackPositions.map(stack => {
        const spot = stacks.find(s => s.stack === stack) || { packages: [] };

        // Determine if the current spot is in the fullSpots array
        const isFullSpot = fullSpots.some(
          fullSpot => fullSpot.column === column && fullSpot.row === row && fullSpot.stack === stack
        );

        return (
          <RackSpot
            key={stack}
            stack={stack}
            packages={spot.packages}
            column={column}
            row={row}
            fetchRacks={fetchRacks}
            isHighlighted={highlightedSpot && highlightedSpot.column === column && highlightedSpot.row === row && highlightedSpot.stack === stack} // Determine if the spot is highlighted
            setHighlightedSpot={setHighlightedSpot} // Pass down setHighlightedSpot
            handleSearch={handleSearch} // Pass down handleSearch
            isFullSpotHidden={isFullSpotHidden && isFullSpot} // Pass down isFullSpotHidden
          />
        );
      })}
    </div>
  );
};

export default RackRow;