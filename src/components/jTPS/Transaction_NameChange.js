export class Transaction_NameChange {

    constructor(list, nameInput) {
        this.list = list;
        this.oldName = list.name;
        this.newName = nameInput;
    }

    doTransaction() {
        this.list.name = this.newName;
    }

    undoTransaction() {
        this.list.name = this.oldName;
    }
}

export default Transaction_NameChange