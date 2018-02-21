import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class UserDisplay extends Component {

  listData() {
    let listData
    if(this.props.listItems.length > 0) {
      listData = this.props.listItems.map((value, index) => {
      return (
        <li key={index.toString()}>
          {`${value.name} ${value.id}`}
        </li>
       )
      }) 
    }    
    return listData   
  }

  render() { 
    
    return (  
      <div>
        <ul>
          {this.listData()}
        </ul>
      </div>
    )
  }
}

export default UserDisplay
