import React from 'react';
import RackColumn from './RackColumn';

const Empty = ({ racks, fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  // calculate full spots directly within this component
  const fullSpots = racks.filter(rack => rack.packages.length === 2).map(rack => ({
    column: rack.column,
    row: rack.row,
    stack: rack.stack,
  }));

  console.log('these are spots with exactly 2 qr codes: ',fullSpots);

  return (
    <div className="empty-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column}>
          <RackColumn
            column={column}
            racks={racks.filter(rack => rack.column === column)}
            fetchRacks={fetchRacks}
            fullSpots={fullSpots}  // pass fullSpots directly to RackColumn
          />
        </div>
      ))}
    </div>
  );
};

export default Empty;