import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home.jsx';
import Health from './Components/Pages/Health';

function App () {
  return (
    <div className='App'>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/health" component={Health}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
