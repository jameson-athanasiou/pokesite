import React from 'react'
import App, { Container } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navigation from '../components/Navigation'
import { AppBar, IconButton, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'

export default class Pokesite extends App {
	state = {
		open: false
	}

	setNavDrawer = open =>
		this.setState({
			open
		})

	static async getInitialProps({ Component, ctx }) {
		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return { pageProps }
	}

	renderHead() {
		return (
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
			</Head>
		)
	}

	Body = () => (
		<>
			<AppBar position="static">
				<Toolbar>
					<IconButton color="inherit" aria-label="Menu" onClick={this.toggleMenu}>
						<MenuIcon />
					</IconButton>
				</Toolbar>
			</AppBar>
			<Navigation isOpen={this.state.open} handleClick={() => this.setNavDrawer(false)} />
		</>
	)

	toggleMenu = () => this.setNavDrawer(!this.state.open)

	render() {
		const { Component, pageProps } = this.props
		return (
			<Container>
				{this.renderHead()}
				<CssBaseline>
					<this.Body />
					<Component {...pageProps} />
				</CssBaseline>
			</Container>
		)
	}
}
