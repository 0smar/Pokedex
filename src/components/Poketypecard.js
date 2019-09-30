import React, { Component } from 'react';
import styled from 'styled-components';
import Pokecard from './Pokecard';

const Card = styled.div`
	display: flex;
  align-items: center;
  justify-content: center;
	border-radius: 7px;
	background-color: #fff;
  width: 300px;
  min-height: 180px;
  margin: 0 auto;
  padding: 1.5rem;
	box-shadow: 0 1px 6px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.15);
  h2{
    text-align: center;
  }
  .column-container{
    width: 100%;
  }
  .typeImage{
    display: flex;
    width: 100px;
    margin: 0 auto;
  }
  button{
    width: 100%;
    padding: 0.5rem;
  }
`;

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

const POKEMON = [
  { id: 637, name: 'Volcarona', type: 'Bug', base_experience: 65 },
  { id: 491, name: 'Darkrai', type: 'Dark', base_experience: 100 },
  { id: 445, name: 'Garchomp', type: 'Dragon', base_experience: 130 },
  { id: 405, name: 'Luxray', type: 'Electric', base_experience: 70 },
  { id: 282, name: 'Gardevoir', type: 'Fairy', base_experience: 178 },
  { id: 448, name: 'Lucario', type: 'Fighting', base_experience: 83 },
  { id: 38, name: 'Ninetales', type: 'Fire', base_experience: 68 },
  { id: 398, name: 'Staraptor', type: 'Flying', base_experience: 95 },
  { id: 609, name: 'Chandelure', type: 'Ghost', base_experience: 112 },
  { id: 407, name: 'Roserade', type: 'Grass', base_experience: 112 },
  { id: 330, name: 'Flygon', type: 'Ground', base_experience: 80 },
  { id: 478, name: 'Froslass', type: 'Ice', base_experience: 99 },
  { id: 424, name: 'Ambipom', type: 'Normal', base_experience: 108 },
  { id: 169, name: 'Crobat', type: 'Poison', base_experience: 78 },
  { id: 196, name: 'Espeon', type: 'Psychic', base_experience: 125 },
  { id: 745, name: 'Lycanroc', type: 'Rock', base_experience: 53 },
  { id: 681, name: 'Aegislash', type: 'Steel', base_experience: 99 },
  { id: 350, name: 'Milotic', type: 'Water', base_experience: 63 },
]

class Poketype extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPokemonRevealed: false,
      pokemon: {}
    }

    this.setPokemon = this.setPokemon.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.type !== prevProps.type) {
      this.setState({ isPokemonRevealed: false });
    }
  }
  
  setPokemon() {
    console.log('Setting pokemon');
    
    const selectedPokemon = POKEMON.filter(pkmn => pkmn.type === this.props.type)[0];

    this.setState({ pokemon: selectedPokemon, isPokemonRevealed: true });
  }

  render() {
    const { type } = this.props;
    const { isPokemonRevealed, pokemon } = this.state;
    return (
      <div className="row-container">
        <Card>
          {type !== '' ? (
            <div className="column-container">
              <h2>You got <span style={{color: COLOR_TYPES.filter(color => color.type === type)[0].color}}>{type}</span></h2>
              <img className="typeImage" src={require(`../assets/images/types/${type.toLowerCase()}_medal.png`)} alt="Pokémon Type"/>
              <button onClick={this.setPokemon} disabled={isPokemonRevealed}>
                <h2>
                  Discover your Pokémon
                </h2>
              </button>
            </div>
          ) : (<h2>Roll the dice!</h2>)}
          
        </Card>
        { isPokemonRevealed && (
          <Pokecard
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
            exp={pokemon.base_experience}
            typeColor={COLOR_TYPES.filter((type) => (type.type === pokemon.type))}
          />
        )}
      </div>
    );
  }
}

export default Poketype;
