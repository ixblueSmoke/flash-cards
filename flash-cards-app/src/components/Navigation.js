import React from 'react';

const Navigation = ({ 
  onPrevious, 
  onNext, 
  canGoPrevious, 
  canGoNext, 
  currentIndex, 
  totalCards 
}) => {
  return (
    <div className="navigation">
      <button 
        className="nav-button"
        onClick={onPrevious}
        disabled={!canGoPrevious}
      >
        ← Previous
      </button>
      
      <div className="nav-info">
        <span>Card {currentIndex + 1} of {totalCards}</span>
      </div>
      
      <button 
        className="nav-button"
        onClick={onNext}
        disabled={!canGoNext}
      >
        Next →
      </button>
    </div>
  );
};

export default Navigation;