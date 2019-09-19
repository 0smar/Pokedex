import React, { Component } from 'react';
import SectionTitle from './SectionTitle';
import Pokecard from './Pokecard';

const COLOR_TYPES = [
  { type: 'Bug', color: '#adbd21' },
  { type: 'Dark', color: '#735a4a' },
  { type: 'Dragon', color: '#4a3994' },
  { type: 'Electric', color: '#ffc631' },
  { type: 'Fairy', color: '#f7b5f7' },
  { type: 'Fighting', color: '#a55239' },
  { type: 'Fire', color: '#f75231' },
  { type: 'Flying', color: '#adbbf8' },
  { type: 'Ghost', color: '#6363b5' },
  { type: 'Grass', color: '#7bce52' },
  { type: 'Ground', color: '#c0a459' },
  { type: 'Ice', color: '#5acee7' },
  { type: 'Normal', color: '#ada594' },
  { type: 'Poison', color: '#b25aa3' },
  { type: 'Psychic', color: '#ff73a5' },
  { type: 'Rock', color: '#bda55a' },
  { type: 'Steel', color: '#adadc6' },
  { type: 'Water', color: '#399cff' },
];

class PokeRandom extends Component {
  constructor(props) {
    super(props);
    this.state = { randomPokemonId: 0 }

    this.getRandomPokemon = this.getRandomPokemon.bind(this);
    this.renderPokemonCard = this.renderPokemonCard.bind(this);
  }
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

  getRandomPokemon(e) {
    const {pokemon} = this.props;
    const randomPokemon = Math.floor(Math.random() * pokemon.length);

    this.setState({ randomPokemonId: pokemon[randomPokemon].id});
  }

  renderPokemonCard() {
    const selectedPokemon = this.props.pokemon.filter(pkmn => pkmn.id === this.state.randomPokemonId);
    const pokemon = selectedPokemon[0];
    
    return <Pokecard
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      type={pokemon.type}
      exp={pokemon.base_experience}
      typeColor={COLOR_TYPES.filter((type) => (type.type === pokemon.type))}
    />
  }

  render() {
    return (
      <div className="pokerandom">
        <SectionTitle title="PokeRandom" color="#000" />
        <p className="page-instructions">Click the button to get a Pokémon. If you get an Espeon, you win.</p>
        { this.state.randomPokemonId !==0 && this.renderPokemonCard() }
        { this.state.randomPokemonId !== 196 ? 
          <button onClick={this.getRandomPokemon}><h2>Get me a Pokémon!</h2></button> 
          : 
          <p className="winner-text">You won!</p>
        }
      </div>
    );
  }
}

export default PokeRandom;
