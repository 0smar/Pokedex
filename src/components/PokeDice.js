import React, { Component } from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import PokeDie from './PokeDie';
import Poketype from './Poketypecard';

const DiceBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

class PokeDice extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six'],
    pokemonTypes: [
      { id: 1, type: 'Bug' },
      { id: 2, type: 'Dark' },
      { id: 3, type: 'Dragon' },
      { id: 4, type: 'Electric' },
      { id: 5, type: 'Fairy' },
      { id: 6, type: 'Fighting' },
      { id: 7, type: 'Fire' },
      { id: 8, type: 'Flying' },
      { id: 9, type: 'Ghost' },
      { id: 10, type: 'Grass' },
      { id: 11, type: 'Ground' },
      { id: 12, type: 'Ice' },
      { id: 13, type: 'Normal' },
      { id: 14, type: 'Poison' },
      { id: 15, type: 'Psychic' },
      { id: 16, type: 'Rock' },
      { id: 17, type: 'Steel' },
      { id: 18, type: 'Water' },
    ],
  }

  constructor(props) {
    super(props);
    this.state = {
      die1: 'one',
      die2: 'one',
      die3: 'one',
      diceTotal: 0,
      isRolling: false,
      selectedType: ''
    };
    this.rollDice = this.rollDice.bind(this);
  }

  rollDice() {
    const value1 = Math.floor(Math.random() * this.props.sides.length);
    const value2 = Math.floor(Math.random() * this.props.sides.length);
    const value3 = Math.floor(Math.random() * this.props.sides.length);
    const diceTotal = value1 + value2 + value3 + 3;

    const selectedType = this.props.pokemonTypes.filter(type => type.id === diceTotal)[0].type;

    const die1 = this.props.sides[value1];
    const die2 = this.props.sides[value2];
    const die3 = this.props.sides[value3];

    this.setState({ isRolling: true })

    setTimeout(() => {
      this.setState({ 
        isRolling: false,
        die1,
        die2,
        die3,
        diceTotal,
        selectedType
      });
    }, 1000);
  }

  render() {
    const { die1, die2, die3, isRolling, selectedType } = this.state;
    return (
      <div className="pokedice">
        <SectionTitle title="PokeDice" color="#000" />
        <div className="row-container">
          <div className="column-container">
            <DiceBox>
              <PokeDie face={die1} rolling={isRolling} />
              <PokeDie face={die2} rolling={isRolling} />
              <PokeDie face={die3} rolling={isRolling} />
            </DiceBox>
            <button onClick={this.rollDice} disabled={isRolling}>
              <h2>
                {isRolling ? 'Rolling...' : 'Roll the dice!'}
              </h2>
            </button>
          </div>
          <div className="column-container type-card">
            <Poketype type={selectedType}  />
          </div>
        </div>
      </div>
    );
  }
}

export default PokeDice;
