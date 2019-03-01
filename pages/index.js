import React, { Component } from 'react'
import axios from 'axios'
import Main from '../components/Main'

const getPokemon = async () => {
	const url = 'https://pokeapi.co/api/v2/pokemon/'
	const pokemon = await axios.get(url)
	console.log(pokemon)
	return pokemon
}

class Home extends Component {
	state = {
		open: false
	}

	setNavDrawer = open =>
		this.setState({
			open
		})

	componentDidMount() {
		const pokemon = getPokemon()
	}

	toggleMenu = () => this.setNavDrawer(!this.state.open)

	render() {
		return <Main />
	}
}

export default Home
