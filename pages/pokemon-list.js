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

	componentDidMount() {
		axios.get(`${baseUrl}/pokedex/2`).then(async result => {
			const { pokemon_entries } = result.data
			const pokes = pokemon_entries.map(poke => axios.get(`${baseUrl}/pokemon/${poke.pokemon_species.name}`))
			const individualResults = await Promise.all(pokes)

			console.log(individualResults)
			this.setState({
				isLoading: false,
				pokemon: individualResults
			})
		})
	}

	render() {
		const { isLoading, pokemon } = this.state
		return isLoading ? <Loading /> : pokemon.map(poke => <PokemonListItem key={poke.id} pokemon={poke.data} />)
	}
}

export default PokemonList
