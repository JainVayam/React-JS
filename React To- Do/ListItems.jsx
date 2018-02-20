import React from 'react';
import PropTypes from 'prop-types';

class ListItems extends React.Component {
  
  constructor(props){
    super(props)
    this.filterElement = this.filterElement.bind(this);
  }

  shouldComponentUpdate(nextProps) {
     // console.log("AAAAAAA")
    return nextProps.isChangeEvent;
  }

  // componentWillReceiveProps(nextProps) {
  //    console.log("BBBBBBBB")
  //    console.log("in componentwill receive nextprops",nextProps  )
  //    console.log("this props", this.props)
  //   if(this.props != nextProps) console.log("Change has occured")
  // }

  deleteElement(index) {
    this.props.deleteMethod(index - 1)    
  }

  filterElement(e) {
    this.props.filterMethod(e.target.value)
  }
  
  listTask() {
    const listItems = this.props.listData.map((element, index) => { 
      index++
      return (
        <li key={index.toString()}> 
          {`task${index} ${element}`}
          <button 
            onClick = {() => this.deleteElement(index)}>Delete 
          </button> 
        </li> 
      )
    }); 
    return listItems;   
  } 

  render() {
    return (
      <div>
        <ul> 
          {this.listTask()}  
        </ul>
        <input 
          type="text" 
          onChange={this.filterElement} 
          placeholder="Filter List"/>
      </div>
    )
  } 
}

ListItems.propTypes = {
  listData: PropTypes.arrayOf(PropTypes.string).isRequired,
  messageType: PropTypes.string.isRequired,
  isChangeEvent : PropTypes.boolean
}

export default ListItems




  
