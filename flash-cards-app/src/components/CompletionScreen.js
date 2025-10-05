import React from 'react';

const CompletionScreen = ({ totalCards, timeSpent, onRestart }) => {
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;

  return (
    <div className="flash-card-container">
      <div className="completion-screen">
        <h2>🎉 Congratulations!</h2>
        <p>
          You've completed all {totalCards} JavaScript flash cards!
          <br />
          Great job improving your JavaScript knowledge!
        </p>
        
        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">{totalCards}</span>
            <span className="stat-label">Cards Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {minutes}:{seconds.toString().padStart(2, '0')}
            </span>
            <span className="stat-label">Time Spent</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Progress</span>
          </div>
        </div>

        <button 
          className="restart-button"
          onClick={onRestart}
        >
          🔄 Start Over
        </button>
      </div>
    </div>
  );
};

export default CompletionScreen;