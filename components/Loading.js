import React from 'react'
import { CircularProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

const styles = () => ({
	container: {
		display: 'flex',
		height: '100%',
		width: '100%',
		padding: '20px'
	},
	spinner: {
		margin: 'auto',
		height: '10%',
		width: '10%'
	}
})

const Loading = ({ classes }) => {
	return (
		<div className={classes.container}>
			<CircularProgress className={classes.spinner} />
		</div>
	)
}

export default withStyles(styles)(Loading)
