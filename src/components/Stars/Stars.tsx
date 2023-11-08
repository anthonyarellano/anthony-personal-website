import React from "react";

interface StarsProps {
  number: number;
}

const Stars: React.FC<StarsProps> = ({ number }) => {
  const starsArray = new Array(number).fill(0);
  return (
    <div className="stars background-star">
      {starsArray.map((_, i) => (
        <div key={`star-${i}`} className="star"></div>
      ))}
    </div>
  );
};

export default Stars;
