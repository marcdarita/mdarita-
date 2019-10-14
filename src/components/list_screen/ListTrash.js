import React, { Component } from 'react'
import TodoListLink from '../home_screen/TodoListLink'
import ListScreen from './ListScreen'

export class ListTrash extends Component {
    render() {
        return (
            <div id="list_trash" onClick = {this.props.toggleModal.bind(this)}>&#128465;</div>
        )
    }
}

export default ListTrash
