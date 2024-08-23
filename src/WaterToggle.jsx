import React, { useState } from 'react';

const WaterToggle = ({ onWaterToggle }) => {
  const [isWatering, setIsWatering] = useState(false);

  const handleWaterToggle = () => {
    setIsWatering(!isWatering);
    onWaterToggle(!isWatering);
  };

  return (
    <div>
      <h3>Water Control</h3>
      <button onClick={handleWaterToggle}>
        {isWatering ? 'Turn Off Water' : 'Turn On Water'}
      </button>
    </div>
  );
};

export default WaterToggle;
