import React, { Component } from 'react';
import styled from 'styled-components';

const Die = styled.i`
  font-size: 8rem;
  color: #3a3a54;
  padding: 1rem;
`;

class PokeDie extends Component {
  render() {
    const { face, rolling } = this.props;
    return (
      <Die className={`fas fa-dice-${face} ${rolling && 'dice-rolling'}`} />
    );
  }
}

export default PokeDie;
