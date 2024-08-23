import React from 'react';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.css';
import plantImage from './images/plants_placeholder-removebg.png';
import thermometer from './images/thermometer-removebg-preview.png';

const SoilTemp = () => {
  const moistureLevel = 66; // Dummy value for soil moisture
  const temperatureLevel = 22; // Dummy value for temperature in °C

  return (
    <div className="SoilTempSensor">
      <div className="ProgressBarSoilTemp">
        <h3>Moisture Level</h3>
        <CircularProgressbarWithChildren value={moistureLevel}>
          <img src={plantImage} className = 'PlantImage' alt="Plant" />
          <div style={{ fontSize: 20, marginTop: 2 }}>
            <strong>{moistureLevel}%</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>

      <div className="ProgressBarSoilTemp">
        <h3>Temperature Level</h3>
        <CircularProgressbarWithChildren value={temperatureLevel}>
            <img src={thermometer} className = 'PlantImage' alt="Plant" />
          <div style={{ fontSize: 20, marginTop: 2 }}>
            <strong>{temperatureLevel}°C</strong>
          </div>
        </CircularProgressbarWithChildren>
      </div>

    </div>
  );
};

export default SoilTemp;
