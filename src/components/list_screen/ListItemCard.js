import React, { Component } from 'react'

import MoveUpImage from './MoveUp.png'; // import image
import MoveDownImage from './MoveDown.png'; // import image
import DeleteImage from './Close.png'; // import image


export class ListItemCard extends Component {
    render() {
        if (this.props.listItem.completed && this.props.listItem.key == 0) {
            return (
                <div className='list_item_card' onClick={console.log("NOPE")}>
                    <div className='list_item_card_description'>
                        {this.props.listItem.description}
                    </div>
                    <div className='list_item_card_assigned_to'>
                        Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                    </div>
                    <div className='list_item_card_due_date'>
                        Due Date: <strong>{this.props.listItem.due_date}</strong>
                    </div>
                    <div className='list_item_card_completed'>
                        Completed {this.props.listItem.completed}
                    </div>
                    <div className = "list_item_card_toolbar">
                            <img class = "disabled" src = {MoveUpImage}></img>
                            <img class = "list_item_card_button" src = {MoveDownImage}></img>
                            <img class = "list_item_card_button" src = {DeleteImage} width="48px" height="48px"></img>
                        </div>
                </div>
            )
            }

        if (this.props.listItem.completed) {
        return (
            <div className='list_item_card'>
                <div className='list_item_card_description'>
                    {this.props.listItem.description}
                </div>
                <div className='list_item_card_assigned_to'>
                    Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                </div>
                <div className='list_item_card_due_date'>
                    Due Date: <strong>{this.props.listItem.due_date}</strong>
                </div>
                <div className='list_item_card_completed'>
                    Completed {this.props.listItem.completed}
                </div>
                <div className = "list_item_card_toolbar">
                        <img class = "list_item_card_button" src = {MoveUpImage}></img>
                        <img class = "list_item_card_button" src = {MoveDownImage}></img>
                        <img class = "list_item_card_button" src = {DeleteImage} width="48px" height="48px"></img>
                    </div>
            </div>
        )
        }

        if (!this.props.listItem.completed && this.props.listItem.key >= (this.props.length - 1)) {
            return (
                <div className='list_item_card'>
                    <div className='list_item_card_description'>
                        {this.props.listItem.description}
                    </div>
                    <div className='list_item_card_assigned_to'>
                        Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                    </div>
                    <div className='list_item_card_due_date'>
                        Due Date: <strong>{this.props.listItem.due_date}</strong>
                    </div>
                    <div className='list_item_card_completed'>
                        Completed {this.props.listItem.completed}
                    </div>
                    <div className = "list_item_card_toolbar">
                            <img class = "list_item_card_button" src = {MoveUpImage}></img>
                            <img class = "disabled" src = {MoveDownImage}></img>
                            <img class = "list_item_card_button" src = {DeleteImage} width="48px" height="48px"></img>
                        </div>
                </div>
            )
            }

        else {
            return (
                <div className='list_item_card'>
                    <div className='list_item_card_description'>
                        {this.props.listItem.description}
                    </div>
                    <div className='list_item_card_assigned_to'>
                        Assigned To: <strong>{this.props.listItem.assigned_to}</strong>
                    </div>
                    <div className='list_item_card_due_date'>
                        Due Date: <strong>{this.props.listItem.due_date}</strong>
                    </div>
                    <div className='list_item_card_not_completed'>
                        Pending {this.props.listItem.completed}
                    </div>
                    <div className = "list_item_card_toolbar">
                        <img class = "list_item_card_button" src = {MoveUpImage}></img>
                        <img class = "list_item_card_button" src = {MoveDownImage}></img>
                        <img class = "list_item_card_button" src = {DeleteImage} width="48px" height="48px"></img>
                    </div>
                </div>
            )
        }
    }

    // moveItemUp() {
    //     temp = this.props.listItem.key;
    //     this.props.listItem.key = temp-1;

    // }
}

export default ListItemCard
