import React from 'react';
import RackColumn from './RackColumn';

const RackingSystem = ({ racks, fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  return (
    <div className="racking-system grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {columns.map(column => (
        <RackColumn
          key={column}
          column={column}
          racks={racks.filter(rack => rack.column === column)}
          fetchRacks={fetchRacks}
        />
      ))}
    </div>
  );
};

export default RackingSystem;