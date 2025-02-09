import React, { useState } from "react";
import "./Table.css";

const Table = ({ table }) => {
  const [selectedChairs, setSelectedChairs] = useState([]);

  const toggleChair = (index) => {
    setSelectedChairs((prev) =>
      prev.includes(index)
        ? prev.filter((chair) => chair !== index)
        : [...prev, index]
    );
  };

  return (
    <div className="table-container">
      {/* Top Chairs */}
      <div className="chairs-row">
        {[...Array(table.seats / 2)].map((_, index) => (
          <div
            key={`top-${index}`}
            className={`chair top ${selectedChairs.includes(index) ? "selected" : ""}`}
            onClick={() => toggleChair(index)}
          >
            {table.name}{index + 1}
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="table" style={{width: table.seats/2*55}}>
        <span>{table.name}</span>
      </div>

      {/* Bottom Chairs */}
      <div className="chairs-row">
        {[...Array(table.seats / 2)].map((_, index) => {
          const chairIndex = index + table.seats / 2;
          return (
            <div
              key={`bottom-${index}`}
              className={`chair bottom ${selectedChairs.includes(chairIndex) ? "selected" : ""}`}
              onClick={() => toggleChair(chairIndex)}
            >
              {table.name}{chairIndex + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Table;