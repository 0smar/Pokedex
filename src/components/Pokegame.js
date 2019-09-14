import React, { Component } from 'react';
import Pokedex from './Pokedex';
import SectionTitle from './SectionTitle';

class Pokegame extends Component {
  static defaultProps = {
    pokemon : [
      {id: 637, name: 'Volcarona', type: 'Bug', base_experience: 65},
      {id: 491, name: 'Darkrai', type:'Dark', base_experience: 100},
      {id: 445, name: 'Garchomp', type: 'Dragon', base_experience: 130},
      {id: 405, name: 'Luxray', type: 'Electric', base_experience: 70},
      {id: 282, name: 'Gardevoir', type: 'Fairy', base_experience: 178},
      {id: 448, name: 'Lucario', type: 'Fighting', base_experience: 83},
      {id: 38, name: 'Ninetales', type: 'Fire', base_experience: 68},
      {id: 398, name: 'Staraptor', type: 'Flying', base_experience: 95},
      {id: 609, name: 'Chandelure', type: 'Ghost', base_experience: 112},
      {id: 407, name: 'Roserade', type: 'Grass', base_experience: 112},
      {id: 330, name: 'Flygon', type: 'Ground', base_experience: 80},
      {id: 478, name: 'Froslass', type: 'Ice', base_experience: 99},
      {id: 424, name: 'Ambipom', type: 'Normal', base_experience: 108},
      {id: 169, name: 'Crobat', type: 'Poison', base_experience: 78},
      {id: 196, name: 'Espeon', type: 'Psychic', base_experience: 125},
      {id: 745, name: 'Lycanroc', type: 'Rock', base_experience: 53},
      {id: 681, name: 'Aegislash', type: 'Steel', base_experience: 99},
      {id: 350, name: 'Milotic', type: 'Water', base_experience: 63},
    ]
  };

  render() {
    let pokemonPool = [ ...this.props.pokemon ];
    let hand1 = [];
    let hand2 = [];

    while (hand1.length < 4) {
      let randomIndex = Math.floor(Math.random() * pokemonPool.length);
      let randomPokemon = pokemonPool.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
    }

    while (hand2.length < 4) {
      let randomIndex = Math.floor(Math.random() * pokemonPool.length);
      let randomPokemon = pokemonPool.splice(randomIndex, 1)[0];
      hand2.push(randomPokemon);
    }

    let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.base_experience, 0);
    
    return (
      <div>
        <SectionTitle title="Pokegame" color="#000" />
        <p className="page-instructions">Reload the page to get a new set of Pokemon and see who wins.  </p>
        <div className="column-container">
          <Pokedex pokemonList={hand1} exp={exp1} isWinner={exp1 > exp2} />
          <Pokedex pokemonList={hand2} exp={exp2} isWinner={exp2 > exp1} />
        </div>
      </div>
    )
  }
}

export default Pokegame;