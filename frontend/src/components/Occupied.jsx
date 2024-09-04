import React from 'react';

const Occupied = ({ racks = [], fullSpots = [] }) => { // Add default values to avoid undefined errors
  const columns = ['B1', 'B2', 'B3', 'B4'];

  return (
    <div className="occupied-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column}>
          <h2 className="text-center font-bold mb-2 mt-2 text-gray-900 bg-white rounded p-4">{column}</h2>
          {racks.filter(rack => rack.column === column).map(rack => (
            rack.packages.length === 2 && fullSpots.some(spot =>
              spot.column === rack.column && spot.row === rack.row && spot.stack === rack.stack
            ) && (
              <div key={`${rack.column}-${rack.row}-${rack.stack}`} className="p-4 bg-gray-700 text-white rounded-lg mb-2">
                <h3>{`${rack.column} - Row: ${rack.row}, Stack: ${rack.stack}`}</h3>
                <ul>
                  {rack.packages.map((qrCode, index) => (
                    <li key={index}>{qrCode}</li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      ))}
    </div>
  );
};

export default Occupied;