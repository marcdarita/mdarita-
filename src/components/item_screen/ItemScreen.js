import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class ItemScreen extends Component {
    render() {
        return (
            <div>
                <h1>Item</h1>
                <br></br>
                <p className = "item_prompt">Description</p>
                <strong>ABC</strong> THIS HAS NOTHING SO FAR!
            </div>
        )
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
