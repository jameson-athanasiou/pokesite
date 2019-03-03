import React, { Component } from 'react'
import { baseUrl } from '../util/url'
import { List, ListItem } from '@material-ui/core'
import Loading from '../components/Loading'
import PokemonListItem from '../components/pokemon-list-item'
import axios from 'axios'

class PokemonList extends Component {
	state = {
		isLoading: true,
		pokemon: []
	}

	getPokemonData = pokemon => {
		return Promise.all(pokemon.map(poke => axios.get(`${baseUrl}/pokemon/${poke.pokemon_species.name}`)))
	}

	queueCalls = async arr => {
		const next = arr.pop()
		await this.getPokemonData(next).then(result => {
			this.setState({
				isLoading: false,
				pokemon: [...this.state.pokemon, ...result]
			})
		})

		if (arr.length) {
			this.queueCalls(arr)
		}
	}

	componentDidMount() {
		axios.get(`${baseUrl}/pokedex/2`).then(async result => {
			const { pokemon_entries } = result.data

			const numberOfGroups = Math.floor(pokemon_entries.length / 20 + 1)
			const pokemonGroups = []

			for (let i = 0; i <= numberOfGroups; i++) {
				pokemonGroups.push(pokemon_entries.slice(20 * i, 20 * (i + 1)))
			}

			console.log(pokemonGroups)

			const sortedGroups = pokemonGroups.reverse()

			this.queueCalls(sortedGroups)
		})
	}

	render() {
		const { isLoading, pokemon } = this.state
		console.log('pokemon in render: ', pokemon)
		return isLoading ? <Loading /> : pokemon.map(poke => <PokemonListItem key={poke.data.id} pokemon={poke.data} />)
	}
}

export default PokemonList
