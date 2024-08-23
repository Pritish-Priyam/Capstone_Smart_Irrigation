import React from 'react';
import './TipDay.css';

const tips = [
  "Water your plants early in the morning to reduce evaporation.",
  "Rotate your potted plants every few weeks to ensure even growth.",
  "Use mulch to retain moisture and reduce weeds in your garden.",
  "Prune your plants regularly to encourage healthy growth.",
  "Check the soil moisture before watering to avoid overwatering.",
  "Group plants with similar water needs together.",
  "Use a balanced fertilizer during the growing season.",
  "Keep an eye out for pests and treat them early.",
  "Ensure your plants get the right amount of sunlight.",
  "Repot plants when they outgrow their current container."
];

const getRandomTips = (numOfTips) => {
  const shuffled = tips.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numOfTips);
};

const TipOfTheDay = () => {
  const randomTips = getRandomTips(4);

  return (
    <div className="tip-container">
      <h4>Tip of the Day</h4>
      <ul>
        {randomTips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default TipOfTheDay;
