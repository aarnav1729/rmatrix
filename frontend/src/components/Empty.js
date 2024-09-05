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
    <div className="racking-system grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
      {columns.map(column => (
        <div key={column} className="rack-column border flex flex-col items-center bg-gray-900 object-contain">
          <h2 className="text-center font-bold mb-2 mt-2 text-gray-900 bg-white rounded p-4">{column}</h2>
          <div className="grid grid-cols-1 w-full">
            {Array.from({ length: 33 }, (_, rowIndex) => rowIndex + 1).map(row => (
              <div key={`${column}-${row}`} className="rack-row grid grid-cols-5 w-full mr-2 object-contain">
                {Array.from({ length: 5 }, (_, stackIndex) => stackIndex + 1).map(stack => {
                  const rack = racks.find(r => r.column === column && r.row === row && r.stack === stack) || { packages: [] };

                  // Set the opacity of racks with exactly 2 QR codes to 0
                  const opacityClass = shouldHideSpot(column, row, stack) ? 'opacity-0' : '';

                  return (
                    <div
                      key={`${column}-${row}-${stack}`}
                      className={`rack-spot border flex flex-col justify-between items-center bg-gray-700 rounded-lg shadow-md 
                                  w-[90%] h-[90%] min-h-[70px] min-w-[70px] mx-auto ${opacityClass}`}
                    >
                      <h3 className="text-center text-white">{`${column},${row},${stack}`}</h3>
                      <div className="flex flex-col items-center w-full">
                        {rack.packages.length > 0 ? (
                          rack.packages.map((qrCode, index) => (
                            <div key={index} className="flex items-center justify-around w-full mb-1">
                              <span className="text-white justify-start">{qrCode}</span>
                              {/* Reduced margin between QR Code and Delete button */}
                            </div>
                          ))
                        ) : (
                          <p className="text-white text-center">No QR Codes</p>
                        )}
                      </div>
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