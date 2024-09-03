import React from 'react';

const Dashboard = ({ total, open, occupied, rackRefs }) => { // Accept rackRefs as props
  const percentageOccupied = ((occupied / total) * 100).toFixed(2);

  const scrollToRack = (rack) => {
    if (rackRefs[rack] && rackRefs[rack].current) {
      rackRefs[rack].current.scrollIntoView({ behavior: 'smooth' }); // Ensure smooth scrolling
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4">Project Tasks</h2>
      <div className="grid grid-cols-2 md:flex md:justify-around items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">{occupied}</div>
          <div>Occupied</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">{open}</div>
          <div>Open</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold">{total}</div>
          <div>Total Spots</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full border-4 border-blue-500 flex items-center justify-center">
            <div className="text-xl font-bold">{percentageOccupied}%</div>
          </div>
        </div>
      </div>

      {/* Add boxes for each rack */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {['B1', 'B2', 'B3', 'B4'].map((rack) => (
          <div
            key={rack}
            className="bg-gray-700 text-white p-4 rounded-lg cursor-pointer text-center"
            onClick={() => scrollToRack(rack)} // Scroll to rack on click
          >
            {rack}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;