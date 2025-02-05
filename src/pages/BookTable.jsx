import React, { useState } from 'react';
import './BookTable.css';

const BookTable = () => {
  const [selectedSeats, setSelectedSeats] = useState({});

  const tables = [
    { id: 1, name: 'Table 1', seats: 4 },
    { id: 2, name: 'Table 2', seats: 4 },
    { id: 4, name: 'Table 4', seats: 12 },
    { id: 5, name: 'Table 5', seats: 12 },
    { id: 3, name: 'Table 3', seats: 4 },
    { id: 0, name: '', seats: 0 },
  ];

  const handleSeatToggle = (tableId, seatIndex) => {
    setSelectedSeats((prev) => {
      const newSelected = { ...prev };
      const key = `${tableId}-${seatIndex}`;
      if (newSelected[key]) {
        delete newSelected[key];
      } else {
        newSelected[key] = true;
      }
      return newSelected;
    });
  };

  return (
    <>
      <div className='booking-wrapper'>
        <h2>Book a Table</h2>
        <div className="table-list">
          {tables.map((table) => (
            <div key={table.id} className="table-container">
              <h3>{table.name}</h3>
              <div className="table-grid">
                {[...Array(table.seats / 2)].map((_, row) => (
                  <div key={row} className="row">
                    <div
                      className={`seat ${selectedSeats[`${table.id}-${row * 2}`] ? 'selected' : ''}`}
                      onClick={() => handleSeatToggle(table.id, row * 2)}
                    ></div>
                    <div className="table"></div>
                    <div
                      className={`seat ${selectedSeats[`${table.id}-${row * 2 + 1}`] ? 'selected' : ''}`}
                      onClick={() => handleSeatToggle(table.id, row * 2 + 1)}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );  
};

export default BookTable;