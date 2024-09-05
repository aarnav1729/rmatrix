// src/components/Empty.js

import React from 'react';

const Empty = ({ racks = [], emptySpots = [] }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  return (
    <div className="empty-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {columns.map(column => (
        <div key={column} className="rack-column border flex flex-col items-center bg-gray-900 object-contain rounded-lg shadow-lg p-4">
          <h2 className="text-center font-bold mb-4 mt-2 text-gray-900 bg-white rounded-full p-4">{column}</h2>
          <div className="grid grid-cols-1 w-full">
            {racks.filter(rack => rack.column === column).map(rack => (
              rack.packages.length === 0 && emptySpots.some(spot =>
                spot.column === rack.column && spot.row === rack.row && spot.stack === rack.stack
              ) && (
                <div
                  key={`${rack.column}-${rack.row}-${rack.stack}`}
                  className="rack-spot border flex flex-col justify-between items-center bg-gray-700 rounded-lg shadow-md p-4 mb-4"
                >
                  <h3 className="text-center text-white font-bold mb-2">{`${rack.column} - Row: ${rack.row}, Stack: ${rack.stack}`}</h3>
                  <p className="text-white text-center">No QR Codes</p>
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Empty;