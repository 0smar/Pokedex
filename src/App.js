import React from 'react';
import './App.scss';
import Pokegame from './components/Pokegame';
import PokeRandom from './components/PokeRandom';
import PokeDice from './components/PokeDice';

function App() {
  return (
    <div className="App">
      <Pokegame />
      <PokeRandom />
      <PokeDice />
    </div>
  );
}

export default App;
