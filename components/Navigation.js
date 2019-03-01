import React, { Component } from 'react'
import { Collapse, Drawer, List, ListItem, ListItemText } from '@material-ui/core'
import Link from 'next/link'

class Navigation extends Component {
	state = {
		generation: false,
		generationSelected: ''
	}

	setCollapsedList = listItem =>
		this.setState({
			[listItem]: !this.state[listItem]
		})

	render() {
		const { isOpen, handleClick } = this.props
		return (
			<Drawer open={isOpen} onClose={handleClick}>
				<List>
					<ListItem button key={'Generation'} onClick={() => this.setCollapsedList('generation')}>
						<ListItemText primary={'Generation'} />
					</ListItem>
					<Collapse in={this.state.generation}>
						<List>
							<Link href="/pokemon-list?gen=1" prefetch>
								<ListItem button key={'Generation1'} onClick={handleClick}>
									<ListItemText primary={'Generation1'} />
								</ListItem>
							</Link>
						</List>
					</Collapse>
				</List>
			</Drawer>
		)
	}
}

export default Navigation
