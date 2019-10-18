export class Transaction_OwnerChange {

    constructor(list, ownerInput) {
        this.list = list;
        this.oldOwner = list.owner;
        this.newOwner = ownerInput;
    }

    doTransaction() {
        console.log("Do:" + this.newOwner);
        this.list.owner = this.newOwner;
    }

    undoTransaction() {
        console.log("Undo:" + this.oldOwner);
        this.list.owner = this.oldOwner;
    }
}

export default Transaction_OwnerChange