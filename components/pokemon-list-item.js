import React, { Component } from 'react'
import { Avatar, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { startCase } from 'lodash-es'
import { withStyles } from '@material-ui/core/styles'

const getTypes = types => {
	const sortedArray = types.sort((firstType, secondType) => firstType.slot - secondType.slot)
	const [type1, type2] = sortedArray.map(({ type }) => type.name)
	return `Type${type2 ? 's' : ''}: ${type1}${type2 ? '/' + type2 : ''}`
}

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
					<Avatar src={pokemon.sprites.front_default} />
					<Typography>{startCase(pokemon.name)}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>{getTypes(pokemon.types)}</ExpansionPanelDetails>
			</ExpansionPanel>
		)
	}
}

export default withStyles(styles)(PokemonListItem)
