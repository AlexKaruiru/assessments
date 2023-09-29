import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

function Toggle() {
  const [isOn, setIsOn] = useState(true);

  function handleClick() {
    // Toggle the state when the button is clicked
    setIsOn(!isOn);
  }

  return (
    <button
      onClick={handleClick}
      className={isOn ? 'on' : 'off'} // Add classes based on the state
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: isOn ? '#4CAF50' : '#f44336', // Green for ON, Red for OFF
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
      }}
    >
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Toggle />);
