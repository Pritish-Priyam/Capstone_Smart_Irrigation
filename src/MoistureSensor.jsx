import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './index.css';
import plantImage from './images/WaterDrop.png';

const percentage = 10

const MoistureSensor = ({ moistureLevel }) => {
  
  return (
    <div className='BigBlockWater'>
      <div className="moisture-sensor">
        <h3>Soil Moisture Level</h3>
        <div className='ProgressBar'>
          <CircularProgressbarWithChildren value={66}>
            {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
            <img src={plantImage} className = 'PlantImage' alt="Plant" />
            <div style={{ fontSize: 20, marginTop: 2 }}>
              <strong>66%</strong> mate
            </div>
          </CircularProgressbarWithChildren>
        </div>

      </div>

      <div className="HealthCentre">
          <h2>Plant Health Centre</h2>
          <div className='CardContainer'>
              <div className='ImageCard'>
                  Real time image of plant
              </div>
              <div className='ResultCard'>
                  Our model results here
              </div>
              <div className='RecommendationsCard'>
                  Recommendations from the Results
              </div>
          </div>
        </div>
    </div>
  );
};

export default MoistureSensor;
