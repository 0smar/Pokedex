import React, { Component } from 'react';
import styled from 'styled-components';
import Pokecard from './Pokecard';

// TO DO's

// Find a better way to pass the type color to the PokeCard

const Pokehand = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  margin: 2rem auto;
  margin-top: 3rem;
  padding: 4rem 2rem;
  border-radius: 10px;
  position: relative;
  background-color: rgba(255, 255, 255, 0.5);
  border: 3px solid ${(props) => ((props.isWinner) ? '#2bc478' : '#eb4034')};
`;
const Title = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  top: -1.5rem;
  width: 200px;
  font-size: 20px;
  left: 50%;
  right: 0;
  transform: translateX(-50%);
  background-color: #fff;
  color: #fff;
  overflow: hidden;
  background-color: ${(props) => ((props.isWinner) ? '#2bc478' : '#eb4034')};
  div{
    padding: 0.5rem 0.8rem;
  }
  .points{
    position: relative;
    width: 60px;
    ::before{
      content:'';
      width:80px; 
      height:100%;
      position:absolute;
      top:0; 
      right:-20px;
      background: rgba(255, 255, 255, 0.25);
      z-index:-1;
      transform: skewX(-20deg);
      transform-origin:0 0;
      text-align: center;
    }
  }
`;
const Pokecards = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
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

class PokeHand extends Component {
  render() {
    const { isWinner, pokemonList, exp } = this.props;
    return (
      <Pokehand isWinner={isWinner}>
        <Title isWinner={isWinner}>
          <div>{isWinner ? 'You win!' : 'You lose!'}</div>
          <div className="points">{exp}</div>
        </Title>
        <Pokecards>
          {pokemonList.map((pokemon) => (
            <Pokecard
              key={pokemon.id}
              id={pokemon.id}
              name={pokemon.name}
              type={pokemon.type}
              exp={pokemon.base_experience}
              typeColor={COLOR_TYPES.filter((type) => (type.type === pokemon.type))}
            />
          ))}
        </Pokecards>
      </Pokehand>
    );
  }
}

export default PokeHand;
