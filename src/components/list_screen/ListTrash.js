import React, { Component } from 'react'
import TodoListLink from '../home_screen/TodoListLink'

export class ListTrash extends Component {
    render() {
        return (
            <div>
            <div id="list_trash" onClick = {this.props.showModal}>&#128465;</div>

            <modalScreen 
                hideModal = {this.props.hideModal}
                modalOn = {this.props.modalOn}
            />

            </div>
        )
    }
}

export default ListTrash
