import React, { Component } from 'react';
import testTodoListData from './TestTodoListData.json'
import HomeScreen from './components/home_screen/HomeScreen'
import ItemScreen from './components/item_screen/ItemScreen'
import ListScreen from './components/list_screen/ListScreen'

const AppScreen = {
  HOME_SCREEN: "HOME_SCREEN",
  LIST_SCREEN: "LIST_SCREEN",
  ITEM_SCREEN: "ITEM_SCREEN"
}

class App extends Component {
  state = {
    currentScreen: AppScreen.HOME_SCREEN,
    todoLists: testTodoListData.todoLists,
    currentList: null
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

  // newList = () => {

  // }

  editItem = () => {
    console.log("Is Editing")
    this.setState({currentScreen: AppScreen.ITEM_SCREEN});
    //this.setState({currentList: null});
  }

  // openModal = () => {
  //   this.setState({currentScreen: AppScreen.})
  // }

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
          modalShow = {this.modalShow}
          />;
      case AppScreen.ITEM_SCREEN:
        return <ItemScreen
        loadList = {this.loadList.bind(this)}
        todoList = {this.state.currentList}
        />
      default:
        return <div>ERROR</div>;
    }
  }

  modalShow = (show) => {
    if (show) {
      console.log("Showing modal")
    return (
        <modal className = "modal" open>
             Delete List?
            <br></br>
            <strong>Are you sure you want to delete this list?</strong>
            <br></br>
            <button onClick = {this.props.removeItem}>Yes</button>
            <button onClick = {this.props.toggleModal}>No</button>
            <br></br>
            The list will not be retrievable.
        </modal>
    )
}
    else {
      console.log("Hiding modal")
        return (
            <dialog className = "modal">
                 Delete List?
                <br></br>
                <strong>Are you sure you want to delete this list?</strong>
                <br></br>
                <button onClick = {this.props.removeItem}>Yes</button>
                <button onClick = {this.props.toggleModal}>No</button>
                <br></br>
                The list will not be retrievable.
            </dialog>
        )
    }
}
}

export default App;