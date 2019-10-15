import React, { Component } from 'react'
import PropTypes from 'prop-types';

//data-animation = "slideInOutLeft"
export class modalScreen extends Component {

    render() {
        return (
            <div className = "modal" id = "modal_yes_no_dialog">

                <div className = "modal_dialog">
                    <header className = "dialog_header">
                        Delete List?
                    </header>
                    <section className = "dialog_content">
                        <p><strong>Are you sure you want to delete this list?</strong></p>
                    </section>
                    <button id = "dialog_yes_button">Yes</button>
                    <button id = "dialog_no_button" onClick = {this.props.hideModal}>No</button>
                    <footer className = "dialog_footer"> The list will not be retreivable.</footer>
                </div>
         </div>
        )
    }
}

export default modalScreen
