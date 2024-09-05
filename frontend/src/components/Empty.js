// src/components/Empty.js

import React from 'react';
import Dashboard from './Dashboard';
import RackingSystem from './RackingSystem';

const Empty = ({ racks = [], fullSpots = [], fetchRacks, rackRefs, highlightedSpot, setHighlightedSpot }) => {
  // Same as homepage rendering, but with adjustments for occupied spots
  
  const isSpotOccupied = (column, row, stack) => {
    return fullSpots.some(
      (spot) => spot.column === column && spot.row === row && spot.stack === stack
    );
  };

  return (
    <div className="empty-system">
      {/* Render Dashboard */}
      <Dashboard total={1320} open={1320 - racks.length} occupied={racks.length} rackRefs={rackRefs} />

      {/* Render RackingSystem, but hide occupied spots */}
      <RackingSystem
        racks={racks}
        fetchRacks={fetchRacks}
        highlightedSpot={highlightedSpot}
        rackRefs={rackRefs}
        setHighlightedSpot={setHighlightedSpot}
        isSpotOccupied={isSpotOccupied} // Pass down the function to check if a spot is occupied
      />
    </div>
  );
};

export default Empty;