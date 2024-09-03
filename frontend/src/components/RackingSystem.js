import React, { useRef } from 'react';
import RackColumn from './RackColumn';

const RackingSystem = ({ racks, fetchRacks, highlightedSpot }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];
  const rackRefs = {
    B1: useRef(null),
    B2: useRef(null),
    B3: useRef(null),
    B4: useRef(null)
  };

  return (
    <div className="racking-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {columns.map(column => (
        <div key={column} ref={rackRefs[column]}> {/* Attach ref to each rack */}
          <RackColumn
            column={column}
            racks={racks.filter(rack => rack.column === column)}
            fetchRacks={fetchRacks}
            highlightedSpot={highlightedSpot}
          />
        </div>
      ))}
    </div>
  );
};

export default RackingSystem;