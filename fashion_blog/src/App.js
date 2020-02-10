import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import NavigationBar from './Components/NavigationBar/NavigationBar';
import Home from './Components/Home/Home.jsx';

function App () {
  return (
    <div className='App'>
      <NavigationBar/>
      <Router>
        <Switch>
          <Route path="/" component={Home}/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
