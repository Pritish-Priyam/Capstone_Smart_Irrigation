import React, { useState, useEffect } from 'react';
import MoistureSensor from './MoistureSensor';
import WaterControl from './WaterControl';
import SoilTemp from './SoilTemp';

const Dashboard = () => {
  const [moistureLevel, setMoistureLevel] = useState(0);
  const [isWatering, setIsWatering] = useState(false);

  useEffect(() => {
    // Simulate fetching moisture level with a timeout
    const fetchMoistureLevel = () => {
      // Mock moisture level data
      const mockMoistureLevel = 45; // Change this value to see different moisture levels
      setMoistureLevel(mockMoistureLevel);
    };

    fetchMoistureLevel();

    // Simulate polling interval
    const interval = setInterval(fetchMoistureLevel, 5000); // Fetch every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleWaterToggle = (shouldWater) => {
    setIsWatering(shouldWater);
    // Mock API call to control water (no actual request is made)
    console.log(`Water supply turned ${shouldWater ? 'on' : 'off'}.`);
  };

  return (
    <div className='DashBoard'>
      <SoilTemp />
      <MoistureSensor moistureLevel={moistureLevel} />
      <WaterControl onWaterToggle={handleWaterToggle} />
    </div>
  );
};

export default Dashboard;
