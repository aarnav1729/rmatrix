import React from 'react';
import RackColumn from './RackColumn';

const Empty = ({ racks, fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  return (
    <div className="empty-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column}>
          <RackColumn
            column={column}
            racks={racks.filter(rack => rack.column === column)}
            fetchRacks={fetchRacks}
          />
        </div>
      ))}
    </div>
  );
}

export default Empty;