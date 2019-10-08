import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class modalScreen extends Component {
    render() {
        return (
            <div className = "modal">
                 Delete List?
                <br></br>
                <strong>Are you sure you want to delete this list?</strong>
                <br></br>
                <button>Yes</button>
                <button>No</button>
                <br></br>
                The list will not be retrievable.
            </div>
        )
    }

    showModal(){
        this.setState ({show: true})
    }

    closeModal(){
        this.setState ({show: false})
    }
}

export default modalScreen
