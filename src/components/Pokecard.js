import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const pokeballKeyframe = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`;
const Card = styled.div`
	display: flex;
	border-radius: 7px;
	background-color: #fff;
	width: 300px;
	height: 150px;
	margin: 0 auto;
	cursor: pointer;
	box-shadow: 0 1px 6px rgba(0,0,0,0.06), 0 1px 3px rgba(0,0,0,0.15);
	transition: all 0.3s cubic-bezier(.25,.8,.25,1);
	:hover{
		transform: translateY(-6px);
		box-shadow: 0 5px 10px rgba(0,0,0,0.1), 0 2px 4px rgba(0,0,0,0.075);
	}
`;
const Sprite = styled.div`
	display: flex;
	width: calc(90px + 2rem);
	position: relative;
	align-items: center;
	justify-content: center;
	padding-top: 2rem;
	padding-bottom: 1rem;
`;
const Pokemon = styled.img`
	z-index: 1;
	display: flex;
`;
const PokemonData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	padding-left: 1rem;
	flex: 1;
	h2 {
		font-weight: bold;
		margin-bottom: 0.5em;
	}
`;
const PokemonType = styled.div`
	background-color: ${(props) => props.typeColor};
	border-radius: 40px;
	width: 70px;
	color: #fff;
	font-size: 14px;
	padding: 2px 0;
	text-align: center;
`;
const BaseExp = styled.div`
	font-size: 14px;
	opacity: 0.6;
	margin-top: 1em;
`;
const Number = styled.div`
	display: flex;
	font-weight: 900;
	padding: 2px 0px 2px 6px;
	background-color: #e8e8e8;
	align-self: flex-start;
	width: 50px;
	border-top-left-radius: 7px;
	border-bottom-right-radius: 7px;
	z-index: 3;
	flex-shrink: 0;
	position: absolute;
	top: 0;
	left: 0;
`;
const Pkball = styled.div`
	display: flex;
	font-size: 0;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
	opacity: 0.35;
`;
const SVG = styled.svg`
	fill: #ccc;
	overflow: visible;
	display: block;
	g{
		transform-origin: center center;
	}
	${Card}:hover &{
		fill: ${(props) => props.typeColor};
		animation: ${pokeballKeyframe} 2s linear 0s infinite;
	}
`;

const Pokeball = (props) => (
  <Pkball>
    <SVG width={90} height={90} typeColor={props.typeColor} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
      <g>
        <path d="M0.2,50.9c0.4,0,0.8-0.1,1.2-0.1c6.4,0,12.8,0,19.2,0c1,0,1.4,0.2,1.7,1.2c3,10.1,12.1,16.9,22.7,16.9
				c10.4,0,19.5-6.8,22.6-16.9c0.2-0.8,0.5-1.2,1.4-1.2c6.6,0,13.3,0,19.9,0c0.3,0,0.5,0.1,0.8,0.1c-1.1,17.1-17.1,38.9-43.8,39.5 C18.9,90.9,1.6,69.3,0.2,50.9z"
        />
        <path d="M90,40.2c-0.8,0-1.2,0-1.7,0c-6.3,0-12.6,0-18.8,0c-1.1,0-1.6-0.3-2-1.4c-3-10-12.2-16.7-22.7-16.7
				c-10.4,0-19.5,6.8-22.5,16.8c-0.3,1-0.7,1.3-1.8,1.3c-6.4-0.1-12.7,0-19.1,0c-0.4,0-0.8,0-1.5,0C1.8,27.3,7.7,16.8,18.3,9.3
				c15-10.5,31.1-11.8,47.4-3.6C79.8,12.7,87.5,24.6,90,40.2z"
        />
        <path d="M59.9,45.5c0,8.2-6.7,14.8-14.9,14.8c-8.3,0-14.9-6.7-14.9-14.8c0-8.1,6.7-14.7,14.9-14.7
				C53.2,30.7,59.8,37.3,59.9,45.5z"
        />
      </g>
    </SVG>
  </Pkball>
);

// const POKE_SPRITE_API = 'https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/';
const POKE_SPRITE_API = 'https://projectpokemon.org/images/normal-sprite/';

// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const {
      id, typeColor, name, type, exp,
    } = this.props;
    const imgSrc = `${POKE_SPRITE_API}${(name).toLowerCase()}.gif`;
    return (
      <Card>
        <Sprite>
          <Number>
						#
            {id}
          </Number>
          <Pokeball typeColor={typeColor[0].color} />
          <Pokemon src={imgSrc} alt={name} />
        </Sprite>
        <PokemonData>
          <h2>{name}</h2>
          <PokemonType typeColor={typeColor[0].color}>{type}</PokemonType>
          <BaseExp>
						Base Exp:
            {' '}
            {exp}
          </BaseExp>
        </PokemonData>
      </Card>
    );
  }
}

export default Pokecard;
