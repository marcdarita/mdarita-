import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { thisExpression } from '@babel/types';

export class addItemScreen extends Component {

    state = {
        new_description: "",
        new_assigned_to: "",
        new_due_date: "",
        new_completed: false,
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        return (
            <div className = "item_screen">
                <h1>ADD Item</h1>
                <br></br>
                <span className = "item_prompt">Description: </span>
                <input type= "input" className = "item_input" name="new_description" onChange = {this.onChange}></input>
                <br></br>
                <br></br>
                <span className = "item_prompt">Assigned To: </span>
                <input type= "input" className = "item_input" name="new_assigned_to" onChange = {this.onChange}></input>
                <br></br>
                <br></br>
                <span className = "item_prompt">Due Date: </span>
                <input type= "date" className = "item_input" name="new_due_date" onChange = {this.onChange}></input>
                <br></br>
                <br></br>
                <span className = "item_prompt">Completed: </span>
                <input type= "checkbox" className = "item_input" name="new_completed" onChange = {this.onChange}></input>
                <br></br>
                <br></br>
                <button className = "item_button"
        onClick = {this.props.addNewItem(this.state.new_description, this.state.new_assigned_to, this.state.new_due_date, this.state.new_completed)}>

                    Submit</button>
                <button className = "item_button" onClick = {this.props.loadList.bind(this, this.props.todoList)}>Cancel</button>
            </div>
        )
    }

    addNewItem = (desc, asto, dd, comp) => {
        this.props.submitNewItem(desc, asto, dd, comp)

    }
}

addItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default addItemScreen
