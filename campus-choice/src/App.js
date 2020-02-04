import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Contact from './components/Contact/ContactUs.jsx';
import SignIn from './components/SignIn/SignUp';


function App() {
	return (
		<div className="App">
			
			<Router>
				<Switch>
				    <Route exact path="/" component={Home}/>
					
					<Route path="/login" component={Login} />
					<Route path="/signin" component={SignIn}/>
					<Route path='/contact' component={Contact}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
