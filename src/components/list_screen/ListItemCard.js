import React, { Component } from 'react'

import MoveUpImage from './MoveUp.png'; // import image
import MoveDownImage from './MoveDown.png'; // import image
import DeleteImage from './Close.png'; // import image
import ItemScreen from '../item_screen/ItemScreen';

export class ListItemCard extends Component {
    
    state = {
        itemCard: null
    }

    setItem(item) {
        this.state.itemCard = item;
    }

    render() {
        {this.setItem(this.props.listItem)}
        //(this.state.itemCard)
        if (this.props.listItem.completed) {
            if (this.props.listItem.key == 0 && this.props.items.length == 1) {
                return (
                    <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                <img className = "disabled" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                <img className = "disabled" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                            </div>
                    </div>
                    )
                }
                else if (this.props.listItem.key >= (this.props.items.length - 1)) {
                    return (
                        <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                    <img className = "list_item_card_button" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                    <img className = "disabled" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                    <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                                </div>
                        </div>
                    )
                }
                else if (this.props.listItem.key == 0) {
                    return (
                        <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                    <img className = "disabled" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                    <img className = "list_item_card_button" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                    <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                                </div>
                        </div>
                    )
                }
                else {
                    return (
                        <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                <img className = "list_item_card_button" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                            </div>
                        </div>
                    )
                }
            }

        else {
            if (this.props.listItem.key == 0 && this.props.items.length == 1) {
                return (
                    <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                <img className = "disabled" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                <img className = "disabled" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                            </div>
                    </div>
                )
            }
            else if (this.props.listItem.key >= (this.props.items.length - 1)) {
                return (
                    <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                <img className = "list_item_card_button" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                <img className = "disabled" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                            </div>
                    </div>
                )
            }
            else if (this.props.listItem.key == 0) {
                return (
                    <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                                <img className = "disabled" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                                <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                            </div>
                    </div>
                )
            }
            else {
                return (
                    <div className='list_item_card' onClick = {this.props.editItem.bind(this, this.state.itemCard)}>
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
                            <img className = "list_item_card_button" src = {MoveUpImage} onClick = {this.props.moveItemUp.bind(this, this.state.itemCard)}></img>
                            <img className = "list_item_card_button" src = {MoveDownImage} onClick = {this.props.moveItemDown.bind(this, this.state.itemCard)}></img>
                            <img className = "list_item_card_button" src = {DeleteImage} width="48px" height="48px" onClick = {this.props.removeItem.bind(this, this.state.itemCard)}></img>
                        </div>
                    </div>
                )
            } // else
        } // final else
    } // render

    // submitItemChanges = (desc, asto, dd, comp) => {
    //     this.props.listItem.description = desc;
    //     this.props.listItem.assigned_to = asto;
    //     this.props.listItem.due_date = dd;
    //     this.props.listItem.completed = comp;
    // }

    // addNewItem = (desc, asto, dd, comp) => {
    //     const newItem = {
    //         description: desc,
    //         assigned_to: asto,
    //         due_date: dd,
    //         completed: comp
    //     }

    //     this.props.items.pop(newItem)

    // }

} // export ...

export default ListItemCard
