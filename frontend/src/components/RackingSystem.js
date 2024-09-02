import React from 'react';
import RackColumn from './RackColumn';

const RackingSystem = ({ racks, fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  console.log('RackingSystem - Received Racks:', racks); // Debugging log

  if (!racks || racks.length === 0) {
    return <p>No racks to display.</p>;
  }

  return (
    <div className="racking-system grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {columns.map(column => {
        const columnRacks = racks.filter(rack => rack.column === column);
        console.log(`Racks in column ${column}:`, columnRacks); // Log racks by column
        return (
          <RackColumn
            key={column}
            column={column}
            racks={columnRacks}
            fetchRacks={fetchRacks}
          />
        );
      })}
    </div>
  );
};

export default RackingSystem;