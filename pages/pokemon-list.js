import React, { Component } from 'react'
import { baseUrl } from '../util/url'
import { List, ListItem } from '@material-ui/core'
import PokemonListItem from '../components/pokemon-list-item'
import axios from 'axios'

class PokemonList extends Component {
	static async getInitialProps({ query }) {
		const result = await axios.get(`${baseUrl}/pokedex/2`)
		const { pokemon_entries } = result.data

		const pokes = pokemon_entries.map(poke => axios.get(`${baseUrl}/pokemon/${poke.pokemon_species.name}`))

		const individualResults = await Promise.all(pokes)

		console.log(individualResults)
		return { pokemon: individualResults }
	}

	render() {
		const { pokemon } = this.props
		return pokemon.map(poke => <PokemonListItem key={poke.id} pokemon={poke.data} />)
	}
}

export default PokemonList
