import React, { Component } from 'react'
import PropTypes from 'prop-types';
import ListScreen from './ListScreen';


export class modalScreen extends Component {

    modalShow = (show) => {
        if (show) {
        return (
            <dialog className = "modal" open>
                 Delete List?
                <br></br>
                <strong>Are you sure you want to delete this list?</strong>
                <br></br>
                <button onClick = {this.props.removeItem}>Yes</button>
                <button onClick = {this.props.toggleModal}>No</button>
                <br></br>
                The list will not be retrievable.
            </dialog>
        )
    }
        else {
            return (
                <dialog className = "modal">
                     Delete List?
                    <br></br>
                    <strong>Are you sure you want to delete this list?</strong>
                    <br></br>
                    <button onClick = {this.props.removeItem}>Yes</button>
                    <button onClick = {this.props.toggleModal}>No</button>
                    <br></br>
                    The list will not be retrievable.
                </dialog>
            )
        }
    }

    render() {
        return (
            <ListScreen 
            modalShow = {this.modalShow}/>
        )
    }
}

export default modalScreen
