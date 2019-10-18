import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'
import jsTPS from './components/jTPS/jsTPS'
import Transaction_NameChange from './components/jTPS/Transaction_NameChange.js';
import Transaction_OwnerChange from './components/jTPS/Transaction_OwnerChange.js';
import Transaction_MoveItem from './components/jTPS/Transaction_MoveItem.js';
import Transaction_RemoveItem from './components/jTPS/Transaction_RemoveItem';
import { isParenthesizedExpression } from '@babel/types';
import Transaction_EditItem from './components/jTPS/Transaction_EditItem.js';
import Transaction_DueDateOrderChange from './components/jTPS/Transaction_DueDateOrderChange.js';
import Transaction_TaskOrderChange from './components/jTPS/Transaction_TaskOrderChange.js'
import Transaction_CompletedOrderChange from './components/jTPS/Transaction_TaskOrderChange.js'

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
    TPS: new jsTPS(),
    currentItemSortCriteria: null
  }

  render() {

    document.body.addEventListener('keydown', this.onKeyPressed);
    switch(this.state.currentScreen) {
      case AppScreen.HOME_SCREEN:
        return <HomeScreen 
        loadList={this.loadList.bind(this)} 
        todoLists={this.state.todoLists} />;
      case AppScreen.LIST_SCREEN:            
        return <ListScreen
          goHome={this.goHome.bind(this)}
          todoList={this.state.currentList}
          todoLists = {this.state.todoLists}
          editItem = {this.editItem.bind(this)}
          addItem = {this.addItem.bind(this)}

          sortTask = {this.sortTask} // Sort
          sortDueDate = {this.sortDueDate} // Sort
          sortCompleted = {this.sortCompleted} // Sort

          changeName = {this.changeName}
          changeOwner = {this.changeOwner}

          moveItemUp = {this.moveItemUp} // Item Toolbar
          moveItemDown = {this.moveItemDown} // Item Toolbar
          removeItem = {this.removeItem} // Item Toolbar

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

  // List Functions --------------------------------------------------------------------------------------------

  changeName = (name) => {
    console.log("Changing Name");
    var newName = new Transaction_NameChange(this.state.currentList, name);
    this.state.TPS.addTransaction(newName);
  }

  changeOwner = (owner) => {
    console.log("Changing Owner:" + owner);
    var newOwner = new Transaction_OwnerChange(this.state.currentList, owner);
    this.state.TPS.addTransaction(newOwner);
  }

  editItem = (item) => {
    console.log("Is Editing")
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    this.setState({itemBeingEdited: item})
  }

  submitChanges = (newKey, newDesc, newAsto, newDd, newComp) => {
    var item = new Transaction_EditItem(this.state.currentList, newKey, newDesc, newAsto, newDd, newComp);
    this.state.TPS.addTransaction(item);

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

    var newItem = {
      "key": this.state.currentList.items.length,
      "description": newDesc,
      "assigned_to": newAsto,
      "due_date": newDd,
      "completed": newComp
    };

    this.state.currentList.items.push(newItem);
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

  // ITEM TOOLBAR CONTROLS -------------------------------------------------------------------------------------

  moveItemUp = (item, event) => {
    event.stopPropagation();
    if (item.key == 0)
        {return false;}
    else {
        var temp = this.state.currentList.items[item.key];
        var temp2 = this.state.currentList.items[item.key - 1];
        this.state.currentList.items[item.key] = this.state.currentList.items[item.key - 1];
        this.state.currentList.items[item.key - 1] = temp;
        item.key = item.key - 1;
        temp2.key = temp2.key + 1;

        let move = new Transaction_MoveItem(this.state.currentList, temp, temp2, temp.key, temp2.key);
        this.state.TPS.addTransaction(move);

        this.setState({currentList: this.state.currentList});
    }
}

  moveItemDown = (item, event) => {
    event.stopPropagation();
    if (item.key >= this.state.currentList.items.length - 1)
        {return false;}
    else {
        var temp = this.state.currentList.items[item.key];
        var temp2 = this.state.currentList.items[item.key + 1];

        
        
        this.state.currentList.items[item.key] = this.state.currentList.items[item.key+1];
        this.state.currentList.items[item.key + 1] = temp;
        
        item.key +=1;
        temp2.key = temp2.key - 1;

        let move = new Transaction_MoveItem(this.state.currentList, temp, temp2, temp.key, temp2.key);
        this.state.TPS.addTransaction(move);

        this.setState({currentList: this.state.currentList});
    }
}

removeItem = (item, event) => {
  event.stopPropagation();
  let remove = new Transaction_RemoveItem(this.state.currentList, item.key);
  this.state.TPS.addTransaction(remove);

  this.setState({currentList: this.state.currentList});
}

  // UNDO/REDO -------------------------------------------------------------------------------------------------

  redo = () => {
    this.state.TPS.doTransaction();
    console.log("REDO");
    this.setState({currentList: this.state.currentList});
  }

  undo = () => {
    this.state.TPS.undoTransaction();
    console.log("UNDO");
    this.setState({currentList: this.state.currentList});
  }

  onKeyPressed = (e) => {
    if (this.state.currentScreen == AppScreen.LIST_SCREEN) {
      if (e.ctrlKey && e.key == "z")
        {this.undo(this);}
      else if (e.ctrlKey && e.key == "y") 
        {this.redo(this);}
      else 
        {return;}
    }
    else 
      {return;}
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
      
      // this.setState({currentList: this.state.currentList});
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

      let sort = new Transaction_DueDateOrderChange(this.state.currentList)
      this.state.TPS.addTransaction(sort);
      this.setState({ currentList: newList });
      //this.setState({currentList: this.state.currentList});
  
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

      let sort = new Transaction_TaskOrderChange(newList)
      this.state.TPS.addTransaction(sort);
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
      let sort = new Transaction_CompletedOrderChange(newList)
      this.state.TPS.addTransaction(sort);
      this.setState({ currentList: newList });
    }
}

export default App;