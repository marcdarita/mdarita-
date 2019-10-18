export class Transaction_EditItem {
    
    constructor(list, key, desc, asto, dd, comp) {
        this.list = list;
        this.oldItem = list.items[key];
        this.key = key;
        this.description = desc;
        this.assigned_to = asto;
        this.due_date = dd;
        this.completed = comp;
    }

    doTransaction() {
        var newItem = {
            "key": this.key,
            "description": this.description,
            "assigned_to": this.assigned_to,
            "due_date": this.due_date,
            "completed": this.completed
        };

        this.list.items[this.key] = newItem;
    }

    undoTransaction() {
        let item = this.oldItem;
        this.list.items[this.key] = item;
    }
}

export default Transaction_EditItem