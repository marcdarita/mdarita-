import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import PropTypes from 'prop-types'
import ListItemCard from './ListItemCard'
import ItemScreen from '../item_screen/ItemScreen'

export class ListScreen extends Component {

    state = {
        name: this.props.todoList.name,
        owner: this.props.todoList.owner,
    }

    changeName = (e) => {
        this.setState({name: e.target.value});
      }

    updateName = () => {
        if (this.state.name === "") {
            this.props.todoList.name = "N/A"
        }
        else {
            this.props.todoList.name = this.state.name;
        }
    }

    changeOwner = (e) => {
        this.setState({owner: e.target.value});
      }

    updateOwner = () => {
        this.props.todoList.owner = this.state.owner;
    }

    getListName() {
        if (this.props.todoList) {
            return this.props.todoList.name;
        }
        else
            return "";
    }
    getListOwner() {
        if (this.props.todoList) {
            return this.props.todoList.owner;
        }
    }

    toggleModalOn = () => {
        document.getElementsByClassName("modal")[0].classList.add("is_visible");
    }

    toggleModalOff = () => {
        document.getElementsByClassName("modal")[0].classList.remove("is_visible");
    }

    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome}
                />
                <ListTrash 
                    toggleModalOn = {this.toggleModalOn}
                />
                <div id="list_details_container">
                    <div id="list_details_name_container" className="text_toolbar">
                        <span id="list_name_prompt">Name:</span>
                        <input 
                            value={this.state.name} 
                            type="text" 
                            id="list_name_textfield"
                            onChange={this.changeName.bind(this)}
                            onKeyUp = {this.updateName}
                            />

                    </div>
                    <div id="list_details_owner_container" className="text_toolbar">
                        <span id="list_owner_prompt">Owner:</span>
                        <input 
                            value={this.state.owner}
                            type="text" 
                            id="list_owner_textfield"                          
                            onChange={this.changeOwner.bind(this)}
                            onKeyUp = {this.props.changeOwner.bind(this.props.todoList, this.props.todoList.owner)} 
                            />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} 
                editItem = {this.props.editItem}
                addItem = {this.props.addItem}
                sortTask = {this.props.sortTask}
                sortDueDate = {this.props.sortDueDate}
                sortCompleted = {this.props.sortCompleted}
                moveItemUp = {this.props.moveItemUp}
                moveItemDown = {this.props.moveItemDown}
                removeItem = {this.props.removeItem}
                //goHome = {this.props.goHome}
                />                

                {/* Trash Can Dialog */}
                <div className = "modal" dataanimation = "slideInOutLeft">
                    <div className = "modal_yes_no_dialog">
                        <div className = "modal_dialog">
                            <h1 className = "modal_header">Delete List?</h1>

                            <section className = "modal_dialog">
                                <p><strong>Are you sure you want to delete this list?</strong></p>
                            </section>

                            <button id = "dialog_yes_button" onClick = {this.removeList}>Yes</button>
                            <button id = "dialog_no_button" onClick = {this.toggleModalOff}>No</button>
                            
                            <footer className = "modal_footer"> The list will not be retreivable.</footer>
                        </div>
                    </div>
                    </div>
            </div>
        )
    }

    removeList = () => {
        let index = this.props.todoList.key;
        let updatedList = this.props.todoLists;
        updatedList.splice(index, 1);

        for (var i = updatedList.length - 1; i >= 0; i--) {
            if (updatedList[i].key > index)
                {updatedList[i].key -= 1;}
        }

        this.setState({currentList: updatedList});
        this.toggleModalOff();
        this.props.goHome();
    }
}

export default ListScreen
