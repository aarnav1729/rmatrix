import React from "react";
import { Link } from "react-router-dom";

const Info = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-grow p-6">
        <div className="bg-gray-800 p-6 rounded-lg text-white shadow-lg">
          {/* Header Section */}
          <h1 className="text-4xl font-bold mb-6 text-center">
            Racking System Application Overview
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-gray-300">
            This application provides a comprehensive visualization of a
            factory's racking system, leveraging QR codes for package tracking.
            Built with a modern tech stack featuring React, Tailwind CSS, and
            Express.js, it offers a dynamic and interactive user experience for
            managing inventory.
          </p>

          {/* Frontend Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Frontend
            </h2>
            <p className="mb-6 text-lg text-white">
              The frontend is built with React and styled using Tailwind CSS for
              a sleek and responsive design. Key components include:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3 text-white">
              <li>
                <strong>App.js:</strong> The root component managing global
                state and integrating all other components.
              </li>
              <li>
                <strong>Header.js:</strong> Provides navigation and search
                functionality with a sleek, responsive design.
              </li>
              <li>
                <strong>Footer.js:</strong> Contains quick links and contact
                information in a concise footer.
              </li>
              <li>
                <strong>Dashboard.js:</strong> Features dynamic stats,
                including total spots, open spots, occupied spots, and a
                graphical representation of occupancy.
              </li>
              <li>
                <strong>RackingSystem.js:</strong> The core layout that displays
                the racking system in a grid format for easy visualization.
              </li>
              <li>
                <strong>RackColumn.js:</strong> Manages each column's layout
                within the racking system.
              </li>
              <li>
                <strong>RackRow.js:</strong> Structures each row within a
                column, supporting detailed QR code management.
              </li>
              <li>
                <strong>RackSpot.js:</strong> Handles the individual spots where
                packages are managed, supporting add and delete operations for
                QR codes.
              </li>
            </ul>
          </section>

          {/* Backend Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Backend
            </h2>
            <p className="mb-6 text-lg text-white">
              The backend is powered by Express.js and integrates seamlessly
              with MongoDB to store and manage racking data. Key backend
              components include:
            </p>
            <ul className="list-disc list-inside mb-6 space-y-3 text-white">
              <li>
                <strong>server.js:</strong> The entry point for the server-side
                logic, handling routing and middleware setup.
              </li>
              <li>
                <strong>MongoDB:</strong> Stores the racking system structure,
                QR code data, and inventory details.
              </li>
            </ul>
          </section>

          {/* Functionality Section */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-blue-600 pb-2">
              Key Functionality
            </h2>
            <ul className="list-disc list-inside mb-6 space-y-3 text-white">
              <li>
                <strong>Visualizing the Racking System:</strong> Presents the
                entire racking system in an intuitive grid layout with real-time
                updates.
              </li>
              <li>
                <strong>QR Code Management:</strong> Allows adding and deleting
                QR codes for precise tracking of inventory items in each spot.
              </li>
              <li>
                <strong>Search Functionality:</strong> Provides a quick and
                efficient way to search and locate specific QR codes.
              </li>
              <li>
                <strong>Dynamic Statistics:</strong> Showcases real-time stats
                such as total spots, open spots, and occupied spots with a
                visually engaging circular progress bar.
              </li>
              <li>
                <strong>Responsive Design:</strong> Ensures that the application
                adapts beautifully to any screen size, from desktops to mobile
                devices.
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Info;