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
            {Array.from({ length: 33 }, (_, rowIndex) => rowIndex + 1).map(row => ( // Loop over each row
              <div key={`${column}-${row}`} className="w-full">
                {Array.from({ length: 5 }, (_, stackIndex) => stackIndex + 1).map(stack => { // Loop over each stack
                  const isEmpty = emptySpots.some(spot =>
                    spot.column === column && spot.row === row && spot.stack === stack
                  );

                  return (
                    isEmpty && (
                      <div
                        key={`${column}-${row}-${stack}`}
                        className="rack-spot border flex flex-col justify-between items-center bg-gray-700 rounded-lg shadow-md p-4 mb-4"
                      >
                        <h3 className="text-center text-white font-bold mb-2">{`${column} - Row: ${row}, Stack: ${stack}`}</h3>
                        <p className="text-white text-center">No QR Codes</p>
                      </div>
                    )
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Empty;