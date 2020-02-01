import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

function App() {
	return (
		<div className="App">
			<Navbar />
			<Router>
				<Switch>
					<Route path="/login" component={Login} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
