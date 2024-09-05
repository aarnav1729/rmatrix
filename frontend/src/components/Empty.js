import React from 'react';

const Empty = ({ racks, fetchRacks }) => {
  const columns = ['B1', 'B2', 'B3', 'B4'];

  // Calculate full spots directly within this component
  const fullSpots = racks.filter(rack => rack.packages.length === 2).map(rack => ({
    column: rack.column,
    row: rack.row,
    stack: rack.stack,
  }));

  // Function to check if a spot should be hidden
  const shouldHideSpot = (column, row, stack) => {
    return fullSpots.some(
      spot => spot.column === column && spot.row === row && spot.stack === stack
    );
  };

  return (
    <div className="empty-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column} className="rack-column border flex flex-col items-center bg-gray-900 object-contain rounded-lg shadow-lg p-4">
          <h2 className="text-center font-bold mb-4 mt-2 text-gray-900 bg-white rounded-full p-4">{column}</h2>
          <div className="grid grid-cols-1 w-full">
            {Array.from({ length: 33 }, (_, rowIndex) => rowIndex + 1).map(row => (
              <div key={`${column}-${row}`} className="w-full">
                <div className="rack-row grid grid-cols-5 w-full mr-2 object-contain">
                  {Array.from({ length: 5 }, (_, stackIndex) => stackIndex + 1).map(stack => {
                    const rack = racks.find(r => r.column === column && r.row === row && r.stack === stack) || { packages: [] };

                    // Set the opacity of racks with exactly 2 QR codes to 0
                    const opacityClass = shouldHideSpot(column, row, stack) ? 'opacity-0' : '';

                    return (
                      <div
                        key={`${column}-${row}-${stack}`}
                        className={`rack-spot border flex flex-col justify-between items-center bg-gray-700 rounded-lg shadow-md p-4 mb-4 ${opacityClass}`}
                      >
                        <h3 className="text-center text-white font-bold mb-2">{`${column} - Row: ${row}, Stack: ${stack}`}</h3>
                        {rack.packages.length > 0 ? (
                          <ul className="list-disc text-white text-center">
                            {rack.packages.map((qrCode, index) => (
                              <li key={index}>{qrCode}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-white text-center">No QR Codes</p>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Empty;