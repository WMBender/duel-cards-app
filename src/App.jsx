import React from 'react';
import SimpleCard from './components/Card';
import MilleniumPuzzle from './components/MilleniumPuzzle';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SimpleCard />
        <p>
          Your biggest challenge is just beggining.
        </p>
        <MilleniumPuzzle/>
        <a
          className="App-link"
          href="https://yugioh.fandom.com/wiki/Rules"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Duel Cards
        </a>
      </header>
    </div>
  );
}

export default App;
