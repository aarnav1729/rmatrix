import React, { useState } from 'react';
import axios from 'axios';

const RackSpot = ({ stack, packages }) => {
  const [qrCodes, setQrCodes] = useState(packages);

  const handleAdd = async () => {
    const qrCode = prompt('Enter QR Code:');
    if (qrCode) {
      const response = await axios.post('http://localhost:5000/api/racks', {
        column: 'B1', // Update with dynamic column
        row: 1, // Update with dynamic row
        stack,
        qrCode
      });
      setQrCodes([...qrCodes, qrCode]);
    }
  };

  const handleDelete = async (index) => {
    const qrCode = qrCodes[index];
    await axios.delete('http://localhost:5000/api/racks', {
      data: {
        column: 'B1', // Update with dynamic column
        row: 1, // Update with dynamic row
        stack,
        qrCode
      }
    });
    setQrCodes(qrCodes.filter((_, i) => i !== index));
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
