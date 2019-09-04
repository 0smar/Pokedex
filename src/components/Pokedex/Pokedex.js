import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';

class Pokedex extends Component {
  static defaultProps = {
    pokemon : [
      {id: 196, name: 'Espeon', type: 'Psychc', base_experience: 62},
      {id: 350, name: 'Milotic', type: 'Water', base_experience: 63},
      {id: 445, name: 'Garchomp', type: 'Ground', base_experience: 72},
      {id: 282, name: 'Gardevoir', type: 'Psychc', base_experience: 178},
      {id: 407, name: 'Roserade', type: 'Grass', base_experience: 112},
      {id: 470, name: 'Leafeon', type: 'Grass', base_experience: 95},
      {id: 478, name: 'Froslass', type: 'Ice', base_experience: 225},
      {id: 637, name: 'Volcarona', type: 'Bug', base_experience: 65}
    ]
  };

  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>

        <div className="Pokedex-cards">
          {this.props.pokemon.map((pokemon) => (
            <Pokecard 
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;