import React, {Component} from 'react'
import Home from "./Home.jsx"
import dataReceive from './dataReceive.jsx'
import notFound from './notFound.jsx'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route 
            exact path='/'  
            component={Home}/>
          <Route 
            path='/getUser' 
            component={dataReceive}/>
          <Route
            component={notFound}/>
        </Switch> 
     </Router>  
    )
  }
}

export default App
