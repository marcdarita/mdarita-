import React, { Component } from 'react'
import TodoListLink from '../home_screen/TodoListLink'

export class ListTrash extends Component {
    render() {
        return (
            
            <div id="list_trash" onClick = {this.props.toggleModalOn.bind(this)}>&#128465;</div>
            
        )
    }
}

export default ListTrash
