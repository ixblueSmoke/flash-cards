import React from 'react';

const FlashCard = ({ card, isFlipped, onFlip }) => {
  if (!card) return null;

  return (
    <div 
      className={`flash-card ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
    >
      <div className="card-type">
        {card.category}
      </div>
      
      <div className="card-content">
        {!isFlipped ? (
          <>
            <div className="question">
              {card.question}
            </div>
            <div className="flip-hint">
              💡 Click to reveal the answer
            </div>
          </>
        ) : (
          <>
            <div className="answer">
              {card.answer}
            </div>
            <div className="flip-hint">
              🔄 Click to go back to question
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default FlashCard;