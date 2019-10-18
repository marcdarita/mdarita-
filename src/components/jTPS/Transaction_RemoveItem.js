export class Transaction_RemoveItem {

    constructor(list, key) {
        this.list = list;
        this.key = key;
        this.removedItem = list.items[key];
    }

    doTransaction() {
        console.log("KEY: " + this.key)
        if (this.key !== this.list.items.length-1) {
            for (var i = this.key+1; i < this.list.items.length; i++) {
                var e = this.list.items[i];
                e.key = i-1;
            }
        }
        if (this.list.items.length === 1)
            {this.list.items.pop();}
        else 
            {this.list.items.splice(this.key, 1)}
    }

    undoTransaction() {
        let newList = this.list;
        newList.items.splice(this.removedItem.key, 0, this.removedItem);
        newList.items.map(item => {
            if (item.key >= this.key && item != this.removedItem) 
                {item.key += 1;}
        });
        this.list = newList;
    }
}

export default Transaction_RemoveItem