import React from 'react';
import ListItems from './ListItems.jsx'
import Message from './Message.jsx'

class App extends React.Component {
  
  constructor(props) {
    super(props);     
    this.state = {
      list: [],
      text: "",
      message : "" 
    }
    this.updateState = this.updateState.bind(this);
    this.updateList = this.updateList.bind(this);
    this.clearState = this.clearState.bind(this);
    this.resetState = this.resetState.bind(this);
    this.deleteState = this.deleteState.bind(this);
    this.isChangeEvent = false;
  };
   
  updateState(e) {
    this.setState({text: e.target.value}) 
  }

  updateList(e) {
    let response = this.validate(this.state.text)
    if(response == "success"){
      this.state.list.push(this.state.text)
      this.setState({list:this.state.list}, () => this.isChangeEvent = true)
      this.setState({copyList: this.state.list})
    } else {
      this.setState({message: response})
    }
  }
  
  validate(text) {
    let whiteSpaceFlag, textSpaces= "";
    if (text == "")  return "Please Enter Something"
    for (let index = 0 ; index < this.state.list.length; index++) { 
      if (this.state.list[index] == text) {
        return "Duplicate Found"                   
      } 
    }
    for (let index = 0 ; index < text.length; index++) {
      if (text[index] != " ") {
        whiteSpaceFlag = 0        
      }
    }    
    if (whiteSpaceFlag != 0) return "Enter something which isn't space";
    return "success";
  } 
  
  clearState(e) {
    this.state.list =[];
    this.setState({list: this.state.list})
  }

  resetState(e) {
    this.setState({list:this.state.copyList})
  }

  deleteState(index) {
    this.state.list.splice(index, 1)
    this.setState({list:this.state.list});
  }
   
  render() {
    return (
      <div> 
        <h1>React To-Do App </h1>
        <h2>Enhance Your Productivity</h2>    
        <br/>
        <input 
          id="textbox" 
          type="text"
          placeholder="create new item"
          onChange = {this.updateState}/>          
        <br/>
        <button 
          onClick={this.updateList}>
          Enter new item 
        </button>
        <ListItems 
          isChangeEvent={this.isChangeEvent}
          listData={this.state.list}
          messageType={this.state.message}
          deleteMethod={this.deleteState}>
        </ListItems>
        <br/><br/>
        <Message 
          messageText={this.state.message}>
        </Message>
        <br/><br/>
        <button 
          onClick={this.clearState} >Clear the List
        </button>
        <button 
          onClick={this.resetState} >Reset the List
        </button>         
      </div>
    );
  }
}

export default App;

  










