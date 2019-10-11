import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class modalScreen extends Component {
    render() {
        if (this.props.visible) {
        return (
            <dialog className = "modal" open>
                 Delete List?
                <br></br>
                <strong>Are you sure you want to delete this list?</strong>
                <br></br>
                <button>Yes</button>
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
                    <button>Yes</button>
                    <button onClick = {this.props.toggleModal}>No</button>
                    <br></br>
                    The list will not be retrievable.
                </dialog>
            )
        }
    }
}

export default modalScreen
