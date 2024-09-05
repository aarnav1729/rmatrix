// src/components/Empty.js

import React from 'react';

const Empty = ({ racks = [], fullSpots = [], fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  return (
    <div className="empty-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      {columns.map(column => (
        <div key={column} className="rack-column border flex flex-col items-center bg-gray-900 object-contain rounded-lg shadow-lg p-4">
          <h2 className="text-center font-bold mb-4 mt-2 text-gray-900 bg-white rounded-full p-4">{column}</h2>
          <div className="grid grid-cols-1 w-full">
            {racks
              .filter(rack => rack.column === column)
              .map(rack => (
                <div key={rack.row}>
                  {Array.from({ length: 5 }, (_, stackIndex) => stackIndex + 1).map(stack => {
                    // Check if the spot is in the fullSpots array
                    const isOccupied = fullSpots.some(spot => 
                      spot.column === rack.column && spot.row === rack.row && spot.stack === stack
                    );

                    return (
                      <div
                        key={`${rack.column}-${rack.row}-${stack}`}
                        className={`rack-spot border flex flex-col justify-between items-center bg-gray-700 rounded-lg shadow-md p-4 mb-4 ${isOccupied ? 'opacity-0' : ''}`}
                      >
                        <h3 className="text-center text-white font-bold mb-2">{`${rack.column} - Row: ${rack.row}, Stack: ${stack}`}</h3>
                        {isOccupied ? null : (
                          <ul className="list-disc text-white text-center">
                            {rack.packages.map((qrCode, index) => (
                              <li key={index}>{qrCode}</li>
                            ))}
                          </ul>
                        )}
                      </div>
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