import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">RM Racking</Link>
      <div className="text-sm">Premier Energies RM Racking</div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/info" className="hover:underline">
              <i className="fas fa-info-circle"></i>
            </Link>
          </li>
          <li>
            <a href="https://www.instagram.com/premier__energies/" rel="noreferrer" target="_blank" className="hover:underline">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.premierenergies.com/" rel="noreferrer" target= "_blank" className="hover:underline">
              <i className="fas fa-globe"></i>
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;