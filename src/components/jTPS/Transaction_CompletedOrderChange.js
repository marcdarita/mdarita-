const ItemSortCriteria = {
    SORT_BY_STATUS_INCREASING: "sort_by_status_increasing",
    SORT_BY_STATUS_DECREASING: "sort_by_status_decreasing"
}

export class Transaction_CompletedOrderChange {

    constructor(list) {
        this.list = list;
        this.newList = list;
        //var newList;
        this.oldList = list;
        this.currentItemSortCriteria = null;
    }

    doTransaction() {
        let newList = this.list;
      if (this.currentItemSortCriteria == ItemSortCriteria.SORT_BY_STATUS_INCREASING) {
        this.newList.items.sort(this.compare);
        this.currentItemSortCriteria = ItemSortCriteria.SORT_BY_STATUS_DECREASING;
      }
      else {
        this.newList.items.sort(this.compare);
        this.currentItemSortCriteria = ItemSortCriteria.SORT_BY_STATUS_INCREASING;
      }
      var i = 0;
      this.newList.items.map(item => {
        item.key = i++;
  
      });
      this.list = this.newList;
    console.log("WORKING");
    }

    undoTransaction() {
        console.log("Reverting List");
        //this.list = this.oldList;
        if (this.currentItemSortCriteria == ItemSortCriteria.SORT_BY_STATUS_INCREASING) {
            this.list.items.sort(this.compare);
            this.currentItemSortCriteria = ItemSortCriteria.SORT_BY_STATUS_DECREASING;
          }
          else {
            this.list.items.sort(this.compare);
            this.currentItemSortCriteria = ItemSortCriteria.SORT_BY_TASK_INCREASING;
          }
          var i = 0;
          this.list.items.map(item => {
            item.key = i++;
      
          });
    }

    compare = (item1, item2) => {
        if (this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_TASK_DECREASING)
          || this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_STATUS_DECREASING)
          || this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING)) {
          let temp = item1;
          item1 = item2;
          item2 = temp;
        }
        
        // SORT BY COMPLETED
        if (this.currentItemSortCriteria == ItemSortCriteria.SORT_BY_STATUS_INCREASING
        || this.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_STATUS_DECREASING)) {
          if (item1.completed < item2.completed) {
            return -1;
          }
          else if (item1.completed > item2.completed) {
            return 1;
          }
          else
            return 0;
        }
    }
      
      
}
export default Transaction_CompletedOrderChange