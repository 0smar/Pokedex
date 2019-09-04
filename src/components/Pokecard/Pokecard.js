import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

const pokeballKeyframe = keyframes`
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
`
const Card = styled.div`
	display: flex;
	border-radius: 7px;
	background-color: #fff;
	width: 300px;
	height: 150px;
	margin-bottom: 1rem;
	cursor: pointer;
`
const Sprite = styled.div`
	display: flex;
	width: calc(90px + 2rem);
	position: relative;
	align-items: center;
	justify-content: center;
	padding-top: 2rem;
	padding-bottom: 1rem;
`
const Pokemon = styled.img`
	z-index: 1;
	display: flex;

`
const PokemonData = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	h2 {
		font-weight: bold;
	}
`
const Number = styled.div`
	display: flex;
	background-color: #000;
	align-self: flex-start;
	width: 40px;
	border-top-left-radius: 7px;
	z-index: 3;
	flex-shrink: 0;
	position: absolute;
	top: 0;
	left: 0;
`
const Pkball = styled.div`
	display: flex;
	font-size: 0;
	position: absolute;
	bottom: 1rem;
	left: 1rem;
`
const SVG = styled.svg`
	fill: #eaeef5;
	overflow: visible;
	display: block;
	g{
		transform-origin: center center;
	}
	${Card}:hover &{
		fill: ${props => props.typeColor};
		animation: ${pokeballKeyframe} 2s linear 0s infinite;
	}
`

const Pokeball = (props) => (
	<Pkball>
		<SVG width={90} height={90} typeColor={props.typeColor} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px">
			<g>
			<path d="M0.2,50.9c0.4,0,0.8-0.1,1.2-0.1c6.4,0,12.8,0,19.2,0c1,0,1.4,0.2,1.7,1.2c3,10.1,12.1,16.9,22.7,16.9
				c10.4,0,19.5-6.8,22.6-16.9c0.2-0.8,0.5-1.2,1.4-1.2c6.6,0,13.3,0,19.9,0c0.3,0,0.5,0.1,0.8,0.1c-1.1,17.1-17.1,38.9-43.8,39.5 C18.9,90.9,1.6,69.3,0.2,50.9z"/>
			<path d="M90,40.2c-0.8,0-1.2,0-1.7,0c-6.3,0-12.6,0-18.8,0c-1.1,0-1.6-0.3-2-1.4c-3-10-12.2-16.7-22.7-16.7
				c-10.4,0-19.5,6.8-22.5,16.8c-0.3,1-0.7,1.3-1.8,1.3c-6.4-0.1-12.7,0-19.1,0c-0.4,0-0.8,0-1.5,0C1.8,27.3,7.7,16.8,18.3,9.3
				c15-10.5,31.1-11.8,47.4-3.6C79.8,12.7,87.5,24.6,90,40.2z"/>
			<path d="M59.9,45.5c0,8.2-6.7,14.8-14.9,14.8c-8.3,0-14.9-6.7-14.9-14.8c0-8.1,6.7-14.7,14.9-14.7
				C53.2,30.7,59.8,37.3,59.9,45.5z"/>
			</g>
		</SVG>
	</Pkball>
)

//const POKE_SPRITE_API = 'https://img.pokemondb.net/sprites/lets-go-pikachu-eevee/normal/';
const POKE_SPRITE_API = 'http://www.pokestadium.com/sprites/xy/';

// let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
	render () {
		let imgSrc = `${POKE_SPRITE_API}${(this.props.name).toLowerCase()}.gif`;
		return (
			<Card>
				<Sprite>
					<Number>{this.props.id}</Number>
					<Pokeball typeColor="red" />
					<Pokemon src={imgSrc} alt={this.props.name} />
				</Sprite>
				<PokemonData>
					<h2>{this.props.name}</h2>
					<div>Type: {this.props.type}</div>
					<div>Exp: {this.props.exp}</div>
				</PokemonData>
			</Card>
		)
	}
}

export default Pokecard;