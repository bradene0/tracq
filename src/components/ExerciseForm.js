// components/ExerciseForm.js
import React, { useState } from "react";

const ExerciseForm = ({ date, onSubmit }) => {
  const [minutes, setMinutes] = useState(0);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (minutes <= 0 || minutes > 1440) { // Assuming maximum minutes in a day is 1440
      setError("Please enter a valid number of minutes (1-1440).");
      return;
    }
    onSubmit({ date, minutes });
    setMinutes(0);
    setError("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Date: {date}
      </label>
      <input
        type="number"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
      />
      <button type="submit">Submit</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ExerciseForm;
