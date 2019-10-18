import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { thisExpression } from '@babel/types';

export class ItemScreen extends Component {

    state = {
        key: this.props.itemBeingEdited.key,
        new_description: "",
        new_assigned_to: "",
        new_due_date: "",
        new_completed: false,
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        let finalSubmit = this.props.CURRENTSCREEN == "ADD_ITEM_SCREEN" ? this.addNewItem : this.submitItemChanges;

        return (
            <div className = "item_screen">
                <h1>Item</h1>
                <br></br>
                <span className = "item_prompt">Description: </span>
                <input type= "input" className = "item_input" name="new_description" onChange = {this.onChange}
                defaultValue = {this.props.CURRENTSCREEN == "ADD_ITEM_SCREEN" ? "" : this.props.itemBeingEdited.description}></input>
                <br></br>
                <br></br>
                <span className = "item_prompt">Assigned To: </span>
                <input type= "input" className = "item_input" name="new_assigned_to" onChange = {this.onChange}
                defaultValue = {this.props.CURRENTSCREEN == "ADD_ITEM_SCREEN" ? "" : this.props.itemBeingEdited.assigned_to}></input>
                <br></br>
                <br></br>
                <span className = "item_prompt">Due Date: </span>
                <input type= "date" className = "item_input" name="new_due_date" onChange = {this.onChange}
                defaultValue = {this.props.CURRENTSCREEN == "ADD_ITEM_SCREEN" ? "" : this.props.itemBeingEdited.due_date}></input>
                <br></br>
                <br></br>
                <span className = "item_prompt">Completed: </span>
                <input type= "checkbox" value = " " className = "item_input" name="new_completed" onChange = {this.onChange}
                defaultValue = {this.props.CURRENTSCREEN == "ADD_ITEM_SCREEN" ? "" : this.props.itemBeingEdited.completed}></input>
                <br></br>
                <br></br>
                <button className = "item_button"
                onClick = {() => finalSubmit(this)}>

                    Submit</button>
                <button className = "item_button" onClick = {this.props.loadList.bind(this, this.props.todoList)}>Cancel</button>
            </div>
        )
    }

    addNewItem = () => {
        this.props.submitNewItem(this.state.new_description, this.state.new_assigned_to, this.state.new_due_date, this.state.new_completed);
    }

    submitItemChanges = (itemBeingEdited) => {
        var desc;
        var asto;
        var dd;
        var comp;

        if (this.state.new_description != "") 
            {desc = this.state.new_description;}
        else
            {desc = this.props.itemBeingEdited.description;}

        if (this.state.new_assigned_to != "") 
            {asto = this.state.new_assigned_to;}
         else
            {asto = this.props.itemBeingEdited.assigned_to;}

        if (this.state.new_due_date != "") 
            {dd = this.state.new_due_date;}
         else
            {dd = this.props.itemBeingEdited.due_date;}

        if (this.state.new_completed != "") 
            {comp = true;}
        else
            {comp = false;}

        this.props.submitChanges(this.state.key, desc, asto, dd, comp);
    }
}

ItemScreen.propTypes = {
    currentScreen: PropTypes.string.isRequired,
    todoItem: PropTypes.object.isRequired
}

export default ItemScreen
