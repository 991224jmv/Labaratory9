import React, { useState, useEffect } from 'react';
import ShootingStar from './components/ShootingStar';
import StarField from './components/StarField';

function App() {
  const [englishWord, setEnglishWord] = useState('');
  const [tagalogTranslation, setTagalogTranslation] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showMagicEffect, setShowMagicEffect] = useState(false);

  const translateWord = () => {
    if (!englishWord.trim()) return;
    
    // Simulated translation mapping
    const translations = {
      hello: 'kamusta',
      world: 'mundo',
      example: 'halimbawa',
      good: 'mabuti',
      morning: 'umaga',
      evening: 'gabi',
      friend: 'kaibigan',
      love: 'pag-ibig',
      food: 'pagkain',
      water: 'tubig',
      star: 'bituin',
      sky: 'langit',
      moon: 'buwan',
      sun: 'araw',
      space: 'kalawakan',
      galaxy: 'galaksiya',
      universe: 'uniberso',
      cosmic: 'kosmiko',
      light: 'liwanag',
      dark: 'madilim',
      night: 'gabi',
      day: 'araw',
      planet: 'planeta',
      earth: 'mundo',
      // Add more translations as needed
    };

    // Add cosmic translation effect
    setIsLoading(true);
    setShowMagicEffect(true);
    
    setTimeout(() => {
      const translation = translations[englishWord.toLowerCase()];
      setTagalogTranslation(translation || 'Hindi mahanap ang pagsasalin');
      setIsLoading(false);
      
      // Hide the magic effect after a delay
      setTimeout(() => {
        setShowMagicEffect(false);
      }, 1000);
    }, 1200);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      translateWord();
    }
  };

  return (
    <div className="cosmic-container">
      <StarField />
      <ShootingStar />
      
      <div className="translator-card">
        <div className="cosmic-glow"></div>
        <h1 className="cosmic-title">English-Tagalog Translator</h1>
        <p className="cosmic-subtitle">English to Tagalog</p>
        
        <div className="input-group">
          <input 
            type="text" 
            value={englishWord} 
            onChange={(e) => setEnglishWord(e.target.value)}
            onKeyPress={handleKeyPress}
            className="cosmic-input"
            placeholder="Enter English word..."
          />
        </div>
        
        <button onClick={translateWord} className="cosmic-button">
          <span>Translate</span>
          <div className="button-stars"></div>
        </button>
        
        {isLoading && (
          <div className="cosmic-loading">
            <div className="cosmic-loader"></div>
            <p>Traveling through the cosmos...</p>
          </div>
        )}
        
        {tagalogTranslation && !isLoading && (
          <div className={`translation-result ${showMagicEffect ? 'magic-effect' : ''}`}>
            <h2>Tagalog:</h2>
            <p className="tagalog-text">{tagalogTranslation}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;