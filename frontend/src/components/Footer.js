import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Racking System</div>
      <div className="text-sm">Build fully functional accessible web applications faster than ever</div>
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