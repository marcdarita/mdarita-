import { threadId } from "worker_threads";

export class Transaction_AddItem {

    constructor(list, desc, asto, dd, comp) {
        this.list = list;
        this.description = desc;
        this.assigned_to = asto;
        this.due_date = dd;
        this.completed = comp;
    }

    doTransaction() {
        var newItem = {
            "key": this.list.items.length,
            "description": this.description,
            "assigned_to": this.assigned_to,
            "due_date": this.due_date,
            "completed": this.completed
        };
        this.list.items[this.list.items.length-1] = newItem;
    }

    undoTransaction() {
        this.list.items.splice(this.list.items.length-1,1);
    }
}

export default Transaction_AddItem