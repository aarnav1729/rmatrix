import React from 'react';
import RackRow from './RackRow';

const RackColumn = ({ column, racks, fetchRacks }) => {
  const rows = Array.from({ length: 33 }, (_, index) => index + 1);

  return (
    <div className="rack-column border p-2">
      <h2 className="text-center font-bold">{column}</h2>
      {rows.map(row => (
        <RackRow
          key={row}
          row={row}
          stacks={racks.filter(rack => rack.row === row)}
          column={column}
          fetchRacks={fetchRacks}
        />
      ))}
    </div>
  );
};

export default RackColumn;