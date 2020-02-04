import React from 'react';
import { Button } from 'reactstrap';
import './homenav.css';
import Cards from '../Cards/HomeCards';

export default function HomeNav() {
    return (
        <div className="wrapper">
        <header>
          <nav>
            <div className="menu-icon">
              <i className="fa fa-bars fa-2x" />
            </div>
            <div className="logo">
              
            </div>
            <div className="menu"><div>
              <ul>
              <Button color="primary" >Login</Button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Button color="success" >Register</Button>{' '}
                
              </ul></div>
            </div>
          </nav>
          
        </header>
        
      </div>
    )
}
