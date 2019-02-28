import React, { Component } from 'react'
import { Drawer, List, ListItem, ListItemText } from '@material-ui/core'

const Navigation = ({ isOpen, handleClick }) => (
<Drawer open={isOpen} onClose={handleClick} >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
)

export default Navigation
