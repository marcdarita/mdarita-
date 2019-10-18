import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import { tsMethodSignature } from '@babel/types';
import addItemImage from './AddItem.png'; // import image

export class ListItemsTable extends Component {
    render() {
        return (
            
            <div id="list_items_container">
                <div className = 'list_item_header_card'>
                <div className="list_item_task_header" onClick = {this.props.sortTask}>Task</div>
                <div className="list_item_due_date_header" onClick = {this.props.sortDueDate}>Due Date</div>
                <div className="list_item_status_header" onClick = {this.props.sortCompleted}>Status</div>
            </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem} 
                            items = {this.props.todoList.items}
                            moveItemUp = {this.props.moveItemUp}
                            moveItemDown = {this.props.moveItemDown}
                            removeItem = {this.props.removeItem}
                            editItem = {this.props.editItem}
                            addItem = {this.props.addItem}
                            submitItemChanges = {this.submitItemChanges}
                            //goHome = {this.props.goHome.bind(this)}
                            />
                    ))
                }

                    <div id="" onClick = {this.props.addItem.bind(this)}><img className = "list_item_add_card" src = {addItemImage}></img></div>
            </div>
        )
    }

    submitItemChanges = (desc, asto, dd, comp) => {
        this.listItem.description = desc;
        this.listItem.assigned_to = asto;
        this.listItem.due_date = dd;
        this.listItem.completed = comp;
    }

    addNewItem = (desc, asto, dd, comp) => {
        const newItem = {
            description: desc,
            assigned_to: asto,
            due_date: dd,
            completed: comp
        }

        this.props.todoList.items.pop(newItem)

    }
}

export default ListItemsTable
