import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import AboutPage from './components/AboutPage';
import App from "./components/App";

render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root'));