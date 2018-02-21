import React, {Component} from 'react'
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div>
        <Link to='/getUser'> 
          <button 
            type="button">          
            Display Users           
          </button>
        </Link>
      </div>
    )
  } 
}

export default Home
