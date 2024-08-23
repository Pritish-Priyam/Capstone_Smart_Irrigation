import React, { useState } from 'react';
import TipOfTheDay from './TipOfTheDay';

const WaterControl = ({ esp32IP }) => {
  const [isWatering, setIsWatering] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleWaterToggle = async () => {
    const action = isWatering ? 'off' : 'on';
    try {
      const response = await fetch(`http://${esp32IP}/api/motor/${action}`);
      const data = await response.json();
      setStatusMessage(data.status);
      setIsWatering(!isWatering);
    } catch (error) {
      console.error('Error communicating with ESP32:', error);
      setStatusMessage('Failed to communicate with ESP32');
    }
  };

  return (
    <div className='BigBlock'>
      <div className='WaterControl'>
        <h3>Water Control</h3>
        <button
          className={`plant-button ${isWatering ? 'water-on' : 'water-off'}`}
          onClick={handleWaterToggle}
        >
          {isWatering ? 'Turn Off Water' : 'Turn On Water'}
        </button>
        <p>{statusMessage}</p>
      </div>
      <TipOfTheDay />

      <div className='card'>
        <h3>Contact Us</h3>
        <p>Pritish Priyam</p>
        <p>priyampritish@gmail.com</p>
      </div>
    </div>
  );
};

export default WaterControl;
