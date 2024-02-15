// pages/inputMinutes.js
"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const InputMinutesPage = () => {
  const router = useRouter();
  const [minutes, setMinutes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle submitting the minutes data
    console.log('Minutes submitted:', minutes);
    // Redirect back to the exercise grid page after submission
    router.push('/');
  };

  const handleCancel = () => {
    // Redirect back to the exercise grid page without submitting
    router.push('/');
  };

  return (
    <div>
      <h1>Input Exercise Minutes</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Minutes:
          <input
            type="number"
            value={minutes}
            onChange={(e) => setMinutes(e.target.value)}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

export default InputMinutesPage;
