import React from 'react';

class ListItems extends React.Component {

  shouldComponentUpdate (nextProps, nextState) {
    return this.props.isChangeEvent;
  }

  deleteElement(index) {
    this.props.deleteMethod(index-1)    
  }
  
  listTask() {
    const listItems = this.props.listData.map((element, index) => { 
      index++;
      return <li key={index.toString()}> {"task"+ index +"   " +element} <button 
      onClick = {() => this.deleteElement(index)} > 
      Delete </button> </li> }); 
    return listItems;   
  } 

  render() {
    console.log("REnder")
    return (
      <div>
        <ul > {this.listTask()}  </ul>
      </div>
    )
  } 
}

export default ListItems




  
