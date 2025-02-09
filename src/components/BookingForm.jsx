import React, { useState } from "react";
import "./BookingForm.css";

const BookingForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    date: "",
    timeSlot: "",
    guests: 1,
    name: "",
    contact: "",
  });

  const timeSlots = ["12:00 PM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="booking-form">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        {/* Date Selector */}
        <label>Date:</label>
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />

        {/* Time Slot Selector */}
        <label>Time Slot:</label>
        <select name="timeSlot" value={formData.timeSlot} onChange={handleChange} required>
          <option value="">Select a slot</option>
          {timeSlots.map((slot, index) => (
            <option key={index} value={slot}>{slot}</option>
          ))}
        </select>

        {/* Name Input */}
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />

        {/* Contact Input */}
        <label>Contact Number:</label>
        <input type="tel" name="contact" value={formData.contact} onChange={handleChange} required />

        {/* Submit Button */}
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default BookingForm;