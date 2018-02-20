import React from 'react';
import ListItems from './ListItems.jsx'
import Message from './Message.jsx'

class App extends React.Component {
  
  constructor(props) {
    super(props);     
    this.state = { 
      text: "",
      list: [],
      copyList: [],
      message : "" 
    }
    this.updateState = this.updateState.bind(this);
    this.updateList = this.updateList.bind(this);
    this.clearList = this.clearList.bind(this);
    this.resetList = this.resetList.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
    this.filterList = this.filterList.bind(this);
    this.isChangeEvent = false;
    this.isChangeEventMessage = false;
  };
   
  updateState(e) {
    this.isChangeEvent = false;
    this.setState({text: e.target.value}, () => {this.isChangeEvent = true})
  }

  updateList(e) {
    this.isChangeEventMessage = true;
    const response = this.validation(this.state.text) 
    if(response == "success") {
      let {text, list} = this.state;
      list.push(text);
      this.setState({list, copyList: list, message:response}) 
    } else {
      this.setState({message: response})    
    }
   console.log(e.target)

  }
  
  validation(text) {
    let whiteSpaceFlag, error = "",check
    if (text.trim() == "") {
      consol
      error = "Enter Something"      
    } else {
      check = this.state.list.indexOf(text.trim());
      if (check != -1) error = "Duplicate Found"
    }
    if (error == "") error = "success"  
    return error
  } 
      
  clearList(e) {
    this.isChangeEvent = true;
    this.isChangeEventMessage = false;
    this.state.list = [];
    this.setState({list: this.state.list})
  }

  resetList(e) {
    this.isChangeEvent = true;
    this.isChangeEventMessage = false;
    this.setState({list: this.state.copyList})
  }

  deleteListItem(index) {
    this.isChangeEvent = true;
    this.isChangeEventMessage = false;
    this.state.list.splice(index, 1)
    this.setState({list: this.state.list});
  }

  filterList(inputText) {
    this.isChangeEventMessage = false;
    this.state.list = this.state.copyList
    const filterArray = this.state.list.filter((value) => {
      if(inputText == value.slice(0, inputText.length)) return true
      else return false   
    })
    this.state.list = filterArray
    this.setState({list: filterArray})
  }
   
  render() {
    const {list, message} = this.state;

    return (
      <div> 
        <h1>React To-Do App </h1>
        <h2>Enhance Your Productivity</h2>    
        <br/>
        <input 
          id="textbox" 
          type="text"
          placeholder="create new item"
          onChange={this.updateState}/>          
        <br/>
        <button 
          onClick={this.updateList}>
          Enter new item 
        </button>
        <ListItems 
          isChangeEvent={this.isChangeEvent}
          listData={list}
          messageType={message}
          deleteMethod={this.deleteListItem}
          filterMethod={this.filterList}>
        </ListItems>
        <br/><br/>
        <Message 
          messageText={message}
          isChangeEvent={this.isChangeEvent}
          isChangeEventMessage = {this.isChangeEventMessage}>
        </Message>
        <br/><br/>
        <button 
          onClick={this.clearList}>
          Clear the List
        </button>
        <button 
          onClick={this.resetList}>
          Reset the List
        </button>         
      </div>
    );
  }
}

export default App;

