import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import { Link } from 'react-router-dom';


am4core.useTheme(am4themes_animated);

const Dashboard = ({ total, open, occupied, rackRefs }) => {
  const percentageOccupied = ((occupied / total) * 100).toFixed(2);
  console.log('percentage occupied', percentageOccupied);
  const percentageOpen = ((open / total) * 100).toFixed(2);

  const scrollToRack = (rack) => {
    if (rackRefs[rack] && rackRefs[rack].current) {
      rackRefs[rack].current.scrollIntoView({ behavior: 'smooth' }); // Ensure smooth scrolling
    }
  };

  useEffect(() => {
    // Create chart instance
    let chart = am4core.create("chartdiv", am4charts.PieChart3D);
    chart.hiddenState.properties.opacity = 0; // Creates initial fade-in effect
    chart.legend = new am4charts.Legend(); // Adds legend

    // Set legend text and percentage color to white
    chart.legend.labels.template.fill = am4core.color("#FFFFFF");
    chart.legend.valueLabels.template.fill = am4core.color("#FFFFFF");

    // Set data for the chart
    chart.data = [
      { category: "Occupied", value: occupied, color: am4core.color("#1E90FF") },
      { category: "Open", value: open, color: am4core.color("#32CD32") }
    ];

    // Configure Pie Series
    let series = chart.series.push(new am4charts.PieSeries3D());
    series.dataFields.value = "value";
    series.dataFields.category = "category";
    series.slices.template.propertyFields.fill = "color";

    series.slices.template.adapter.add("tooltipText", function (text, target) {
      return `${target.dataItem.category}: {value} spots ({value.percent.formatNumber('#.0')}%)`;
    });

    // Set label colors to white and adjust position for smaller screens
    series.labels.template.fill = am4core.color("#FFFFFF"); // Set text color to white
    series.labels.template.adapter.add("radius", function (radius, target) {
      return window.innerWidth < 768 ? -10 : -60; // Reduce position for mobile screens
    });
    series.labels.template.adapter.add("fontSize", function (size, target) {
      return window.innerWidth < 768 ? 12 : 14; // Adjust font size for mobile
    });
    series.labels.template.wrap = true; // Enable text wrapping
    series.labels.template.maxWidth = window.innerWidth < 768 ? 80 : 200; // Reduce width for mobile

    // Cleanup on component unmount
    return () => {
      chart.dispose();
    };
  }, [open, occupied]); // Re-render the chart when data changes

  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-4">
      <h2 className="text-xl font-bold mb-4 text-white">Project Tasks</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 md:flex md:justify-around items-center gap-4">
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">{occupied}</div>
          <div className="text-white">Occupied</div>
          <Link to="/occupied" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-white hover:text-blue-500">Occupied</Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">{open}</div>
          <div className="text-white">Open</div>
          <Link to="/empty" className="bg-blue-500 text-white rounded-lg p-2 hover:bg-white hover:text-blue-500">Empty</Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">{total}</div>
          <div className="text-white">Total Spots</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl font-bold text-white">{percentageOpen}</div>
          <div className="text-white">% Open</div>
        </div>
      </div>

      {/* Pie Chart Section on a New Line */}
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-xs sm:max-w-md">
          <div id="chartdiv" className="w-full h-64"></div> {/* Updated chart container */}
        </div>
      </div>

      {/* Add boxes for each rack */}
      <div className="mt-6 grid grid-cols-2 gap-4">
        {['B1', 'B2', 'B3', 'B4'].map((rack) => (
          <div
            key={rack}
            className="bg-gray-700 text-white p-4 rounded-lg cursor-pointer text-center"
            onClick={() => scrollToRack(rack)}
          >
            {rack}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;