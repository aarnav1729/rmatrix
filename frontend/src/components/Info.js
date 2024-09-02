import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow p-4">
        <div className="bg-gray-800 p-4 rounded-lg text-white">
          <Link
            to="/"
            className="bg-blue-500 text-white p-2 rounded inline-flex w-full items-center"
          >
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 className="text-2xl font-bold mb-4 mt-4">
            Racking System Application
          </h1>
          <p className="mb-4">
            This application was built to visualize a factory's racking system
            with QR codes for package tracking. The application consists of a
            React frontend and an Express.js backend, with MongoDB as the
            database.
          </p>

          <h2 className="text-xl font-bold mb-2">Frontend</h2>
          <p className="mb-4">
            The frontend is built using React and styled with Tailwind CSS. Key
            components include:
          </p>
          <ul className="list-decimal list-inside mb-4">
            <li>
              <strong>App.js:</strong> The main component that holds the state
              and integrates other components.
            </li>
            <li>
              <strong>Header.js:</strong> Contains the navigation and search bar
              functionality.
            </li>
            <li>
              <strong>Footer.js:</strong> A simple footer with navigation links.
            </li>
            <li>
              <strong>Dashboard.js:</strong> Displays stats like total spots,
              open spots, and occupied spots, and includes a circular status
              bar.
            </li>
            <li>
              <strong>RackingSystem.js:</strong> The main grid layout displaying
              the racking system.
            </li>
            <li>
              <strong>RackColumn.js:</strong> Represents each column in the
              racking system.
            </li>
            <li>
              <strong>RackRow.js:</strong> Represents each row in a column.
            </li>
            <li>
              <strong>RackSpot.js:</strong> Represents each spot in a row and
              manages QR code additions and deletions.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Backend</h2>
          <p className="mb-4">
            The backend is built using Express.js and connects to MongoDB for
            data storage. Key components include:
          </p>
          <ul className="list-decimal list-inside mb-4">
            <li>
              <strong>server.js:</strong> The main server file that sets up
              routes and connects to MongoDB.
            </li>
            <li>
              <strong>MongoDB:</strong> Used to store the racking system data,
              including QR codes and their locations.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Functionality</h2>
          <p className="mb-4">
            The application supports the following functionality:
          </p>
          <ul className="list-decimal list-inside mb-4">
            <li>
              <strong>Visualizing the Racking System:</strong> Displays the
              entire racking system as a grid of columns, rows, and spots.
            </li>
            <li>
              <strong>Adding QR Codes:</strong> Allows users to add QR codes to
              specific spots, with a maximum of 2 QR codes per spot.
            </li>
            <li>
              <strong>Deleting QR Codes:</strong> Allows users to delete QR
              codes from specific spots.
            </li>
            <li>
              <strong>Searching QR Codes:</strong> Allows users to search for a
              QR code and find its location in the racking system.
            </li>
            <li>
              <strong>Dynamic Stats:</strong> Displays dynamic statistics about
              total spots, open spots, and occupied spots, with a circular
              status bar showing the percentage of occupied spots.
            </li>
          </ul>

          <h2 className="text-xl font-bold mb-2">Responsiveness</h2>
          <p className="mb-4">
            The application is fully responsive, adapting to different screen
            sizes using Tailwind CSS classes for media queries.
          </p>

          <Link
            to="/"
            className="bg-blue-500 text-white p-2 rounded inline-flex w-full items-center"
          >
            <i className="fas fa-arrow-left"></i>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default Info;