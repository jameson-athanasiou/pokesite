import React, { Component } from 'react'
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { startCase } from 'lodash-es'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
	item: {
		width: '100%'
	}
})

class PokemonListItem extends Component {
	render() {
		const { classes, pokemon } = this.props
		return (
			<ExpansionPanel className={classes.item}>
				<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>{startCase(pokemon.name)}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>details</ExpansionPanelDetails>
			</ExpansionPanel>
		)
	}
}

export default withStyles(styles)(PokemonListItem)
