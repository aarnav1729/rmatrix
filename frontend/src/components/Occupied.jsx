import React from 'react';
import RackColumn from './RackColumn';

const Occupied = ({ racks, fullSpots, fetchRacks }) => { // Accept fullSpots as a prop
  const columns = ['B1', 'B2', 'B3', 'B4'];

  // Filter racks to show only the ones with exactly 2 QR Codes
  const filterFullSpots = (column) => {
    return racks
      .filter(rack => rack.column === column) // Filter racks by column
      .map(rack => ({
        ...rack,
        spots: rack.spots.filter(spot => // Filter spots by those present in fullSpots
          fullSpots.some(fullSpot =>
            fullSpot.column === rack.column &&
            fullSpot.row === rack.row &&
            fullSpot.stack === spot.stack
          )
        )
      }))
      .filter(rack => rack.spots.length > 0); // Only keep racks with full spots
  };

  return (
    <div className="occupied-racking-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <RackColumn
          key={column}
          column={column}
          racks={filterFullSpots(column)} // Pass only the filtered full spots to each column
          fetchRacks={fetchRacks}
          highlightedSpot={null} // No highlighting needed for the occupied view
          setHighlightedSpot={() => {}} // Dummy function for occupied view
          handleSearch={() => {}} // Dummy function for occupied view
        />
      ))}
    </div>
  );
};

export default Occupied;