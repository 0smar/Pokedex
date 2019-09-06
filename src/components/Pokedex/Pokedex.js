import React, { Component } from 'react';
import Pokecard from '../Pokecard/Pokecard';
import './Pokedex.css';

///////-- To do's -- ///////
// Find a better way to pass the type color to the PokeCard

const COLOR_TYPES = [
  {type: 'Bug', color: '#adbd21'},
  {type: 'Dark', color: '#735a4a'},
  {type: 'Dragon', color: '#4a3994'},
  {type: 'Electric', color: '#ffc631'},
  {type: 'Fairy', color: '#f7b5f7'},
  {type: 'Fight', color: '#a55239'},
  {type: 'Fire', color: '#f75231'},
  {type: 'Flying', color: '#adbbf8'},
  {type: 'Ghost', color: '#6363b5'},
  {type: 'Grass', color: '#7bce52'},
  {type: 'Ground', color: '#c0a459'},
  {type: 'Ice', color: '#5acee7'},
  {type: 'Normal', color: '#ada594'},
  {type: 'Poison', color: '#b25aa3'},
  {type: 'Psychic', color: '#ff73a5'},
  {type: 'Rock', color: '#bda55a'},
  {type: 'Steel', color: '#adadc6'},
  {type: 'Water', color: '#399cff'},
]

class Pokedex extends Component {
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
              typeColor={COLOR_TYPES.filter(type => (type.type === pokemon.type))}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Pokedex;