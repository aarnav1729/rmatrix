import React, { useState, useEffect } from 'react';
import RackColumn from './RackColumn';

const Empty = ({ racks, fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];
  const [fullSpots, setFullSpots] = useState([]);

  // Calculate spots with exactly 2 QR Codes
  useEffect(() => {
    const spotsWithTwoQRCodes = [];

    racks.forEach(rack => {
      if (rack.packages.length === 2) {  // Find racks with exactly 2 QR Codes
        spotsWithTwoQRCodes.push({
          column: rack.column,
          row: rack.row,
          stack: rack.stack
        });
      }
    });

    setFullSpots(spotsWithTwoQRCodes);  // Update state with spots having 2 QR Codes
  }, [racks]);  // Recalculate whenever racks data changes

  return (
    <div className="empty-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column}>
          <RackColumn
            column={column}
            racks={racks.filter(rack => rack.column === column)}
            fetchRacks={fetchRacks}
            fullSpots={fullSpots}  // Pass the calculated fullSpots to RackColumn
            isFullSpotHidden={true}  // Prop to control hiding spots with exactly 2 QR Codes
          />
        </div>
      ))}
    </div>
  );
}

export default Empty;