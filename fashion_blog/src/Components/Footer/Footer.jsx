import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div>
        <div className="search-text"> 
          <div className="container">
            <div className="row text-center">
              <div className="form">
                <form id="search-form" className="form-search form-horizontal">
                  <input type="text" className="input-search" placeholder="Search" />
                  <button type="submit" className="btn-search">Search</button>
                </form>
              </div>
            </div>         
          </div>     
        </div>
        <footer>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <ul className="list-inline">
                  <li>
                    <a href="#"><i className="fa fa-facebook fa-2x" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-dropbox fa-2x" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-flickr fa-2x" /></a> 
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-github fa-2x" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-linkedin fa-2x" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-tumblr fa-2x" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa fa-google-plus fa-2x" /></a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-6 col-xs-12">
                <ul className="menu list-inline">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Gallery </a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div> 
          </div>
        </footer>
        <div className="copyright">
          <div className="container">
            <div className="row text-center">
              <p>Copyright © 2019 All rights reserved</p>
            </div>
          </div>
        </div>
        
     
       
      </div>
    )
}
