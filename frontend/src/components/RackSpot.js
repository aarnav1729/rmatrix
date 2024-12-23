import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const RackSpot = ({ stack, packages, column, row, fetchRacks, isHighlighted, setHighlightedSpot, isFullSpotHidden }) => {
  const [qrCodes, setQrCodes] = useState(packages);
  const spotRef = useRef(null);

  useEffect(() => {
    setQrCodes(packages);
  }, [packages]);

  useEffect(() => {
    if (isHighlighted && spotRef.current) {
      spotRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [isHighlighted]);

  const handleAdd = async () => {
    if (qrCodes.length >= 2) {
      alert('Each spot can only hold a maximum of 2 QR codes.');
      return;
    }

    const qrCode = prompt('Enter QR Code:');
    if (qrCode) {
      try {
        await axios.post('https://localhost:5000/api/racks', {
          column,
          row,
          stack,
          qrCode,
        });
        fetchRacks();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const { location } = error.response.data;

          // Show the alert message
          alert(`QR already exists at ${location.column}-${location.row}-${location.stack}`);

          // Call setHighlightedSpot to highlight and scroll to the duplicate spot
          if (location) {
            setHighlightedSpot({
              column: location.column,
              row: Number(location.row),
              stack: Number(location.stack),
            });
          }
        } else {
          console.error('Error adding QR code:', error);
        }
      }
    }
  };

  const handleDelete = async (index) => {
    const qrCode = qrCodes[index];
    await axios.delete('https://localhost:5000/api/racks', {
      data: {
        column,
        row,
        stack,
        qrCode,
      },
    });
    fetchRacks();
  };

  return (
    <div
      ref={spotRef}
      className={`rack-spot border flex flex-col justify-between items-center bg-gray-700 rounded-lg shadow-md 
                 w-[90%] h-[90%] min-h-[70px] min-w-[70px] mx-auto ${isHighlighted ? 'bg-yellow-500' : ''}`}
                 style={{ opacity: isFullSpotHidden ? 0 : 1 }} 
    >
      <h3 className="text-center text-white">{`${column},${row},${stack}`}</h3>
      <div className="flex flex-col items-center w-full">
        {qrCodes.map((qrCode, index) => (
          <div key={index} className="flex items-center justify-around w-full mb-1">
            <span className="text-white justify-start">{qrCode}</span>
            {/* Reduced margin between QR Code and Delete button */}
            <button className="text-red-500 justify-end" onClick={() => handleDelete(index)}>
              Del
            </button>
          </div>
        ))}
      </div>
      {qrCodes.length < 2 && (
        <button className="text-blue-500 mt-auto mb-1" onClick={handleAdd}>
          Add
        </button>
      )}
    </div>
  );
};

export default RackSpot;