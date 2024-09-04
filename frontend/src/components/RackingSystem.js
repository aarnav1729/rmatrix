import React from 'react';
import RackColumn from './RackColumn';

const RackingSystem = ({ racks, fetchRacks, highlightedSpot, rackRefs, handleSearch }) => { // Accept handleSearch as props
  const columns = ['B1', 'B2', 'B3', 'B4'];

  return (
    <div className="racking-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column} ref={rackRefs[column]}> {/* Attach ref to each rack */}
          <RackColumn
            column={column}
            racks={racks.filter(rack => rack.column === column)}
            fetchRacks={fetchRacks}
            highlightedSpot={highlightedSpot}
            handleSearch={handleSearch} // Pass down handleSearch
          />
        </div>
      ))}
    </div>
  );
};

export default RackingSystem;