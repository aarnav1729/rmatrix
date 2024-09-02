import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RackSpot = ({ stack, packages, column, row, fetchRacks }) => {
  const [qrCodes, setQrCodes] = useState(packages);

  useEffect(() => {
    setQrCodes(packages);
  }, [packages]);

  const handleAdd = async () => {
    if (qrCodes.length >= 2) {
      alert('Each spot can only hold a maximum of 2 QR codes.');
      return;
    }

    const qrCode = prompt('Enter QR Code:');
    if (qrCode) {
      await axios.post('https://rmatrix.onrender.com/api/racks', {
        column,
        row,
        stack,
        qrCode
      });
      fetchRacks();
    }
  };

  const handleDelete = async (index) => {
    const qrCode = qrCodes[index];
    await axios.delete('https://rmatrix.onrender.com/api/racks', {
      data: {
        column,
        row,
        stack,
        qrCode
      }
    });
    fetchRacks();
  };

  return (
    <div className="rack-spot p-2 border">
      <h3>Stack {stack}</h3>
      {qrCodes.map((qrCode, index) => (
        <div key={index} className="flex justify-between items-center">
          <span>{qrCode}</span>
          <button className="text-red-500" onClick={() => handleDelete(index)}>Delete</button>
        </div>
      ))}
      <button className="text-blue-500" onClick={handleAdd}>Add QR Code</button>
    </div>
  );
};

export default RackSpot;