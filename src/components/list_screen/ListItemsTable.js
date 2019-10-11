import React, { Component } from 'react'
import ListItemCard from './ListItemCard'
import { tsMethodSignature } from '@babel/types';

export class ListItemsTable extends Component {
    render() {
        return (
            <div id="list_items_container">
                <div className = 'list_item_header_card'>
                <div className="list_item_task_header">Task</div>
                <div className="list_item_due_date_header">Due Date</div>
                <div className="list_item_status_header">Status</div>
            </div>
                {
                    this.props.todoList.items.map((todoItem)=>(
                        <ListItemCard 
                            key={todoItem.key}
                            listItem={todoItem} 
                            items = {this.props.todoList.items}
                            moveItemUp = {this.moveItemUp}
                            moveItemDown = {this.moveItemDown}
                            removeItem = {this.removeItem}
                            editItem = {this.props.editItem.bind(this)}
                            />
                    ))
                }
            </div>
        )
    }

    moveItemUp = (item) => {
        if (item.key == 0)
            {return false;}
        else {
            var temp = this.props.todoList.items[item.key];
            var temp2 = this.props.todoList.items[item.key - 1];
            this.props.todoList.items[item.key] = this.props.todoList.items[item.key - 1];
            this.props.todoList.items[item.key - 1] = temp;
            item.key = item.key - 1;
            temp2.key = temp2.key + 1;

            this.setState(this.props.todoList.items);
        }
    }

    moveItemDown = (item) => {
        if (item.key >= this.props.todoList.items.length - 1)
            {return false;}
        else {
            var temp = this.props.todoList.items[item.key];
            var temp2 = this.props.todoList.items[item.key + 1];
            this.props.todoList.items[item.key] = this.props.todoList.items[item.key+1];
            this.props.todoList.items[item.key + 1] = temp;
            
            item.key = item.key + 1;
            temp2.key = temp2.key - 1;

            this.setState(this.props.todoList.items);
        }
    }

    removeItem = (item) => {
        if (item.key !== this.props.todoList.items.length-1) {
            for (var i = item.key+1; i < this.props.todoList.items.length; i++) {
                var e = this.props.todoList.items[i];
                e.key = i-1;
            }
        }
        if (this.props.todoList.items.length === 1)
            {this.setState(this.props.todoList.items.pop());}
        else 
            {this.setState(this.props.todoList.items.splice(item.key, 1))}
    }

    // editItem = () => {
    //     console.log("Is Editing 1234");
    // }
}

export default ListItemsTable
