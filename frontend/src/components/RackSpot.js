import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const RackSpot = ({ stack, packages, column, row, fetchRacks, isHighlighted }) => {
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
        await axios.post('https://rmatrix.onrender.com/api/racks', {
          column,
          row,
          stack,
          qrCode,
        });
        fetchRacks();
      } catch (error) {
        if (error.response && error.response.status === 400) {
          const { location } = error.response.data;

          // Show the alert message first
          alert(`QR already exists at ${location.column}-${location.row}-${location.stack}`);

          // Call the function to highlight the spot by searching for the QR code
          if (qrCode) {
            searchAndHighlight(qrCode);  // Pass the QR code instead of location
          }
        } else {
          console.error('Error adding QR code:', error);
        }
      }
    }
  };

  // Internal function to search and highlight the duplicate QR code
  const searchAndHighlight = async (qrCode) => {
    try {
      const response = await axios.get(`https://rmatrix.onrender.com/api/racks/search?qrCode=${qrCode}`);
      if (response.data.location) {
        // Extract the column, row, and stack from the location data
        const [foundColumn, foundRow, foundStack] = response.data.location.split('-');
        // If this spot is the one with the duplicate, scroll to it
        if (
          foundColumn === column &&
          Number(foundRow) === row &&
          Number(foundStack) === stack
        ) {
          spotRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    } catch (error) {
      console.error('Error searching for QR code:', error);
    }
  };

  const handleDelete = async (index) => {
    const qrCode = qrCodes[index];
    await axios.delete('https://rmatrix.onrender.com/api/racks', {
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
        <button className="text-blue-500 mt-auto" onClick={handleAdd}>
          Add
        </button>
      )}
    </div>
  );
};

export default RackSpot;