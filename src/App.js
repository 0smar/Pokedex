import React from 'react';
import './App.scss';
import Pokegame from './components/Pokegame';
import PokeRandom from './components/PokeRandom';

function App() {
  return (
    <div className="App">
      <Pokegame />
      <PokeRandom />
    </div>
  );
}

export default App;
