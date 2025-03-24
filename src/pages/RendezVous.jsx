import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const RendezVous = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h2 className="text-xl font-semibold mb-4">Sélectionnez une date :</h2>
      <div className="relative">
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          dateFormat="dd/MM/yyyy"
          className="px-4 py-2 text-white bg-gray-700 rounded-md focus:outline-none"
          calendarClassName="bg-gray-800 text-white rounded-lg shadow-lg p-2"
        />
      </div>
      {selectedDate && (
        <p className="mt-4 text-lg">
          📅 Date sélectionnée :{" "}
          <span className="font-bold">
            {selectedDate.toLocaleDateString("fr-FR")}
          </span>
        </p>
      )}
    </div>
  );
};

export default RendezVous;
