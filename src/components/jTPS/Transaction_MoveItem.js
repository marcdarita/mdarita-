export class Transaction_MoveItem {

    constructor(list, item1, item2, index1, index2) {
        this.list = list;
        this.item1 = item1;
        this.item2 = item2;
        this.oldIndex1 = item1.key;
        this.oldIndex2 = item2.key;
        this.index1 = index1;
        this.index2 = index2;
    }

    doTransaction() {
        var newList = this.list;

        newList.items[this.index1] = this.item1;
        newList.items[this.index2] = this.item2;
        newList.items[this.index1].key = this.index1;
        newList.items[this.index2].key = this.index2;
        this.list = newList;
    }

    undoTransaction() {
        var newList = this.list;
        
        var i = newList.items[this.oldIndex2].key;
        newList.items[this.oldIndex2].key = newList.items[this.oldIndex1].key;
        newList.items[this.oldIndex1].key = i;

        var item = newList.items[this.oldIndex2];
        newList.items[this.oldIndex2] = newList.items[this.index1];
        newList.items[this.oldIndex1] = item;
        this.list = newList;
    }
}

export default Transaction_MoveItem