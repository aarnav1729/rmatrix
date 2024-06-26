import React from 'react';
import RackSpot from './RackSpot';

const RackRow = ({ row, stacks, column, fetchRacks }) => {
  const stackPositions = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="rack-row flex">
      {stackPositions.map(stack => {
        const spot = stacks.find(s => s.stack === stack) || { packages: [] };
        return (
          <RackSpot
            key={stack}
            stack={stack}
            packages={spot.packages}
            column={column}
            row={row}
            fetchRacks={fetchRacks}
          />
        );
      })}
    </div>
  );
};

export default RackRow;