import React from "react";
import Table from "./../components/Table";
import "./BookTable.css";
import BookingForm from "../components/BookingForm";

const BookTable = () => {
  const tables = [
    { id: 1, name: "A", seats: 4 },
    { id: 2, name: "B", seats: 6 },
    { id: 3, name: "C", seats: 2 },
    { id: 4, name: "D", seats: 10 },
  ];

  return (
    <div className="booking-wrapper"> 
      <div className="book-table">
        <Table table={tables[0]} />
        <Table table={tables[1]} />
        <Table table={tables[2]} />
        <Table table={tables[3]} />
      </div>
      <div className="book-table-form">
        <BookingForm />
      </div>
    </div>
  );
};

export default BookTable;