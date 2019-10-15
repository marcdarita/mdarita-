import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import addItemScreen from './components/addItem_screen/addItemScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN",
  ADD_ITEM_SCREEN: "ADD_ITEM_SCREEN"
}

const ItemSortCriteria = {
  SORT_BY_TASK_INCREASING: "sort_by_task_increasing",
  SORT_BY_TASK_DECREASING: "sort_by_task_decreasing",
  SORT_BY_DUE_DATE_INCREASING: "sort_by_due_date_increasing",
  SORT_BY_DUE_DATE_DECREASING: "sort_by_due_date_decreasing",
  SORT_BY_STATUS_INCREASING: "sort_by_status_increasing",
  SORT_BY_STATUS_DECREASING: "sort_by_status_decreasing"
}
class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null,
    itemBeingEdited: null,
    modalOn: false
  }

  render() {
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          editItem = {this.editItem.bind(this)}
          addItem = {this.addItem.bind(this)}
          modalShow = {this.modalShow}
          sortTask = {this.sortTask}
          sortDueDate = {this.sortDueDate}
          sortCompleted = {this.sortCompleted}
          showModal = {this.showModal} // ListTrash
          hideModal = {this.hideModal} // List Trash
          modalOn = {this.state.modalOn} // List Trash
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
        loadList = {this.loadList.bind(this)}
        todoList = {this.state.currentList}
        itemBeingEdited = {this.state.itemBeingEdited}
        submitChanges = {this.submitChanges}
        CURRENTSCREEN = {AppScreen.ITEM_SCREEN}
        />;
      case AppScreen.ADD_ITEM_SCREEN:
        return <ItemScreen 
          loadList = {this.loadList.bind(this)}
          todoList = {this.state.currentList}
          submitNewItem = {this.submitNewItem}
          itemBeingEdited = {this.state.itemBeingEdited == null ? {key: 0, description: "", assigned_to: "", due_date: "", completed: "" } : this.state.itemBeingEdited}
          submitNewItem = {this.submitNewItem}
          CURRENTSCREEN = {AppScreen.ADD_ITEM_SCREEN}
        />;
      default:
        return <div>ERROR</div>;
    }
  }

  goHome = () => {
    this.setState({currentScreen: AppScreen.HOME_SCREEN});
    this.setState({currentList: null});
  }

  loadList = (todoListToLoad) => {
    this.setState({currentScreen: AppScreen.LIST_SCREEN});
    this.setState({currentList: todoListToLoad});
    console.log("currentList: " + this.state.currentList);
    console.log("currentScreen: " + this.state.currentScreen);
  }

  editItem = (item) => {
    console.log("Is Editing")
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({itemBeingEdited: item})
  }

  submitChanges = (newKey, newDesc, newAsto, newDd, newComp) => {
    // var item = new ListItemEdit_Transaction(this.state.currentList, key, desc, asto, dd, comp);
    // this.state.tos.addTransaction(item);

    var item = {
        "key": newKey,
        "description": newDesc,
        "assigned_to": newAsto,
        "due_date": newDd,
        "completed": newComp
    };

    this.state.currentList.items[newKey] = item;
    this.loadList(this.state.currentList);
  }

  addItem = () => {
    console.log("Is Adding")
    this.setState({currentScreen: AppScreen.ADD_ITEM_SCREEN});
  }

  submitNewItem = (newDesc, newAsto, newDd, newComp) => {

    var item = {
      "key": this.state.currentList.items.length,
      "description": newDesc,
      "assigned_to": newAsto,
      "due_date": newDd,
      "completed": newComp
    };

    this.state.currentList.items.push(item);
    this.loadList(this.state.currentList);
  }

  deleteList = () => {
    var index = this.state.currentList.key;
    var arr = this.state.todoLists;
    arr.splice(index, 1);
    arr.map(item => {
      if (item.key >index) 
      {item.key -= 1;}
    })
  }

  // MODAL -----------------------------------------------------------------------------------------------------
  showModal = () => {
    let modal = document.getElementById("modal_yes_no_dialog");
    console.log("Showing modal")
    if (!this.state.modalOn)
      {this.setState({modalOn: true});}
  }

  hideModal = () => {
    console.log("Hiding modal")
    this.setState({modalOn: false});
  }

// SORTING ------------------------------------------------------------------------------------------------------
compare = (item1, item2) => {
  if (this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_TASK_DECREASING)
    || this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_STATUS_DECREASING)
    || this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING)) {
    let temp = item1;
    item1 = item2;
    item2 = temp;
  }
  // SORT BY ITEM DESCRIPTION
  if ((this.state.currentItemSortCriteria == ItemSortCriteria.SORT_BY_TASK_INCREASING)
    || this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_TASK_DECREASING)) {
    if (item1.description < item2.description) {

      return -1;
    }
    else if (item1.description > item2.description) {

      return 1;
    }
    else
      return 0;
  }

  // 3) DATE -  sort by due date

  if (this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING) ||
    this.state.currentItemSortCriteria == (ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING)) {
    if (item1.due_date < item2.due_date) { //item1 gets lower key

      return -1;
    }
    else if (item1.due_date > item2.due_date) {
      return 1;
    }
    else
      return 0;
  }

  // SORT BY COMPLETED
  else {
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

    sortDueDate = () => {
      let newList = this.state.currentList;
      if (this.state.currentItemSortCriteria == ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING) {
        newList.items.sort(this.compare);
        this.setState({ currentItemSortCriteria: ItemSortCriteria.SORT_BY_DUE_DATE_DECREASING });
      }
      else {
        newList.items.sort(this.compare);
        this.setState({ currentItemSortCriteria: ItemSortCriteria.SORT_BY_DUE_DATE_INCREASING });
      }
      var i = 0;
      newList.items.map(item => {
        item.key = i++;
  
      });
      this.setState({ currentList: newList });
  
    }
  
    sortTask = () => {
      let newList = this.state.currentList;
      if (this.state.currentItemSortCriteria == ItemSortCriteria.SORT_BY_TASK_INCREASING) {
        this.setState({ currentItemSortCriteria: ItemSortCriteria.SORT_BY_TASK_DECREASING });
  
        newList.items.sort(this.compare);
      } else {
        this.setState({ currentItemSortCriteria: ItemSortCriteria.SORT_BY_TASK_INCREASING });
        newList.items.sort(this.compare);
      }
      var i = 0;
      newList.items.map(item => {
        item.key = i++;
  
      });
      this.setState({ currentList: newList });
    }
  
    sortCompleted = () => {
      let newList = this.state.currentList;
      if (this.state.currentItemSortCriteria == ItemSortCriteria.SORT_BY_STATUS_INCREASING) {
        this.setState({ currentItemSortCriteria: ItemSortCriteria.SORT_BY_STATUS_DECREASING });
  
        newList.items.sort(this.compare);
      } else {
        this.setState({ currentItemSortCriteria: ItemSortCriteria.SORT_BY_STATUS_INCREASING });
        newList.items.sort(this.compare);
      }
      var i = 0;
      newList.items.map(item => {
        item.key = i++;
  
      });
      this.setState({ currentList: newList });
    }
}

export default App;