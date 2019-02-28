import React, { Component } from 'react'
import axios from 'axios'
import Navigation from './core/Navigation'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

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

	toggleMenu = () =>
		this.setState({
			open: !this.state.open
		})

	render() {
		return (
			<>
				<AppBar position="static">
					<Toolbar>
						<IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
				<Navigation isOpen={this.state.open} handleClick={() => this.setNavDrawer(false)} />
				<div>Welcome to next.js!</div>
			</>
		)
	}
}

export default Home
