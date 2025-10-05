import React from 'react';

const ProgressBar = ({ currentCard, totalCards, progressPercentage }) => {
  return (
    <div className="progress-section">
      <div className="progress-info">
        <span className="progress-text">
          Progress
        </span>
        <span className="card-counter">
          {currentCard} of {totalCards}
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;