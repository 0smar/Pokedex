import React, { Component } from 'react';
import Pokedex from './Pokedex';
import SectionTitle from './SectionTitle';

class Pokegame extends Component {
  static defaultProps = {
    pokemon : [
      {id: 196, name: 'Espeon', type: 'Psychic', base_experience: 62},
      {id: 350, name: 'Milotic', type: 'Water', base_experience: 63},
      {id: 445, name: 'Garchomp', type: 'Ground', base_experience: 72},
      {id: 282, name: 'Gardevoir', type: 'Psychic', base_experience: 178},
      {id: 407, name: 'Roserade', type: 'Grass', base_experience: 112},
      {id: 470, name: 'Leafeon', type: 'Grass', base_experience: 95},
      {id: 478, name: 'Froslass', type: 'Ice', base_experience: 225},
      {id: 637, name: 'Volcarona', type: 'Bug', base_experience: 65}
    ]
  };

  render() {
    let hand1 = [];
    let hand2 = [ ...this.props.pokemon ];

    while (hand1.length < hand2.length) {
      let randomIndex = Math.floor(Math.random() * hand2.length);
      let randomPokemon = hand2.splice(randomIndex, 1)[0];
      hand1.push(randomPokemon);
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