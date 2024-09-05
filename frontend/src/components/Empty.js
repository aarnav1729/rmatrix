// src/components/Empty.js

import React from 'react';
import Dashboard from './Dashboard';
import RackingSystem from './RackingSystem';
import RackSpot from './RackSpot';

const Empty = ({ racks = [], fullSpots = [], fetchRacks, rackRefs, highlightedSpot, setHighlightedSpot }) => {
  // Function to check if a spot is full (has exactly 2 QR Codes)
  const isSpotFull = (column, row, stack) => {
    return fullSpots.some(
      (spot) => spot.column === column && spot.row === row && spot.stack === stack
    );
  };

  // Wrapper component for RackingSystem that applies opacity style to full spots
  const CustomRackSpot = ({ stack, packages, column, row, ...props }) => {
    const style = isSpotFull(column, row, stack) ? { opacity: 0 } : {}; // Set opacity to 0 if spot is full

    return (
      <div style={style}>
        {/* Render the original RackSpot with custom style */}
        <RackSpot
          stack={stack}
          packages={packages}
          column={column}
          row={row}
          {...props}
        />
      </div>
    );
  };

  return (
    <div className="empty-system">
      {/* Render Dashboard */}
      <Dashboard total={1320} open={1320 - racks.length} occupied={racks.length} rackRefs={rackRefs} />

      {/* Render RackingSystem, with CustomRackSpot to manage opacity */}
      <RackingSystem
        racks={racks}
        fetchRacks={fetchRacks}
        highlightedSpot={highlightedSpot}
        rackRefs={rackRefs}
        setHighlightedSpot={setHighlightedSpot}
        RackSpotComponent={CustomRackSpot} // Use custom RackSpot component
      />
    </div>
  );
};

export default Empty;