import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">RM Racking</div>
      <div className="text-sm">Premier Energies Raw Material Matrix</div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Project</a></li>
          <li><a href="#" className="hover:underline">Community</a></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;