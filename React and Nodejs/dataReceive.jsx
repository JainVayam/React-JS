import React, {Component} from 'react'
import {Link} from 'react-router-dom';
import UserDisplay from './userDisplay.jsx';

class UserDataReceive extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      receivedData: []     
    };
    this.fetchFirst = this.fetchFirst.bind(this)
  }  

  fetchFirst() {
     fetch('http://localhost:8081/getUser')
    .then((resp) => { 
      return resp.json()
    })
    .then((data) => {
      this.setState({receivedData: data})
    })  
  }       
  
  componentWillMount () {
    this.fetchFirst();
  }  

  render() {
    const {receivedData} = this.state
    
    return (
      <div>
        <UserDisplay 
          listItems = {receivedData}> 
        </UserDisplay>
      </div>
    )
  } 
}

export default UserDataReceive
