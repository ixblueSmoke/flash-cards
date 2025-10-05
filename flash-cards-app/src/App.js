import React, { useState, useEffect } from 'react';
import FlashCard from './components/FlashCard';
import ProgressBar from './components/ProgressBar';
import Navigation from './components/Navigation';
import CompletionScreen from './components/CompletionScreen';
import { flashCardsData } from './data/flashCardsData';

function App() {
  // State management for the flash cards app
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completedCards, setCompletedCards] = useState(new Set());
  const [isCompleted, setIsCompleted] = useState(false);
  const [startTime, setStartTime] = useState(Date.now());

  // Reset flip state when changing cards
  useEffect(() => {
    setIsFlipped(false);
  }, [currentCardIndex]);

  // Check if all cards are completed
  useEffect(() => {
    if (completedCards.size === flashCardsData.length && flashCardsData.length > 0) {
      setIsCompleted(true);
    }
  }, [completedCards]);

  // Handler functions for navigation and interaction
  const handleNextCard = () => {
    if (currentCardIndex < flashCardsData.length - 1) {
      // Mark current card as completed when moving to next
      setCompletedCards(prev => new Set([...prev, currentCardIndex]));
      setCurrentCardIndex(currentCardIndex + 1);
    }
  };

  const handlePreviousCard = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
  };

  const handleFlipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
    setCompletedCards(new Set());
    setIsCompleted(false);
    setStartTime(Date.now());
  };

  const currentCard = flashCardsData[currentCardIndex];

  // Calculate progress percentage
  const progressPercentage = ((currentCardIndex + 1) / flashCardsData.length) * 100;

  if (isCompleted) {
    return (
      <div className="app">
        <CompletionScreen 
          totalCards={flashCardsData.length}
          timeSpent={Math.floor((Date.now() - startTime) / 1000)}
          onRestart={handleRestart}
        />
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>JavaScript Flash Cards</h1>
        <p>Test your JavaScript knowledge with interactive flash cards. Click on a card to reveal the answer!</p>
      </header>

      <div className="flash-card-container">
        <ProgressBar 
          currentCard={currentCardIndex + 1}
          totalCards={flashCardsData.length}
          progressPercentage={progressPercentage}
        />

        <FlashCard 
          card={currentCard}
          isFlipped={isFlipped}
          onFlip={handleFlipCard}
        />

        <Navigation 
          onPrevious={handlePreviousCard}
          onNext={handleNextCard}
          canGoPrevious={currentCardIndex > 0}
          canGoNext={currentCardIndex < flashCardsData.length - 1}
          currentIndex={currentCardIndex}
          totalCards={flashCardsData.length}
        />
      </div>
    </div>
  );
}

export default App;