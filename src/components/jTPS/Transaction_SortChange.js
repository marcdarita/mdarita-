const ItemSortCriteria = {
    SORT_BY_DUE_DATE_INCREASING: "sort_by_due_date_increasing",
    SORT_BY_DUE_DATE_DECREASING: "sort_by_due_date_decreasing",
  }

export class Transaction_SortChange {

    constructor(currentList, newList, oldList) {
        this.list = currentList;
        this.newList = newList;
        this.oldList = oldList;
        this.currentItemSortCriteria = null;
    }

    doTransaction() {
      let newL = this.list;
      newL.items = this.newList.items;
      this.list = newL;
    }

    undoTransaction() {
        console.log("Reverting List");
        let newList = this.list;
        newList.items = this.oldList.items;
        for (let i = 0; i < newList.items.length; i++) {
          newList.items[i].key = i;
        }
        this.list = newList;
    }
}

export default Transaction_SortChange