// components/ExerciseGrid.js

import React from "react";

const ExerciseGrid = () => {
  // Generate an array of 365 items representing each day of the year
  const daysOfYear = Array.from({ length: 365 }, (_, index) => index + 1);

  // Calculate the number of columns per row
  const numCols = 40;

  // Calculate the number of rows needed
  const numRows = Math.ceil(daysOfYear.length / numCols);

  // Function to render a single row of squares
  const renderRow = (rowIndex) => (
    <div key={rowIndex} className="flex">
      {Array.from({ length: numCols }).map((_, colIndex) => {
        const day = rowIndex * numCols + colIndex + 1;
        if (day > daysOfYear.length) return null;
        const date = new Date(2024, 0, day); // January is 0 in JavaScript Date object
        const formattedDate = date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
        return (
          <div key={day} className="relative">
            <div
              className="bg-black w-5 h-5 rounded-md flex items-center justify-center cursor-pointer"
              style={{ marginRight: "3.5px", marginBottom: "3.5px" }}
            >
              <div className="tooltip">{formattedDate}</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="grid grid-cols-67 gap-0" style={{ width: "100%" }}>
      {Array.from({ length: numRows }).map((_, rowIndex) => renderRow(rowIndex))}
    </div>
  );
};

export default ExerciseGrid;
