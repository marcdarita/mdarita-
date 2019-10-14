import React, { Component } from 'react'
import ListHeading from './ListHeading'
import ListItemsTable from './ListItemsTable'
import ListTrash from './ListTrash'
import modalScreen from './modalScreen'
import PropTypes from 'prop-types';
import ListItemCard from './ListItemCard';
import ItemScreen from '../item_screen/ItemScreen'

export class ListScreen extends Component {

    state = {
        name: this.props.todoList.name,
        owner: this.props.todoList.owner,
        showModal: false
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
    render() {
        return (
            <div id="todo_list">
                <ListHeading goHome={this.props.goHome} />
                <ListTrash toggleModal = {this.toggleModal}/>
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
                            onKeyUp = {this.updateOwner} />
                    </div>
                </div>
                <ListItemsTable todoList={this.props.todoList} 
                editItem = {this.props.editItem}
                //goHome = {this.props.goHome}
                />
                <modalScreen 
                showModal = {this.state.showModal}
                //toggleModal = {this.toggleModal.bind(this)}
                />
                
            </div>
        )
    }

    toggleModal = () => {
        this.setState ({showModal: !(this.state.showModal)})
        console.log(this.state.showModal);
        this.props.modalShow(this.state.showModal)
    }

    removeList = () => {
        this.pop();
    }

    // handleChange(event) {
    //     this.setState({value: event.target.value});
    //   }
    
    // handleSubmit(event) {
    //     alert('A name was submitted: ' + this.state.value);
    //     event.preventDefault();
    //   }
}

export default ListScreen
