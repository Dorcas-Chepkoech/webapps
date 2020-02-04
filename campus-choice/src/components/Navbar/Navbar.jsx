import React, {useState} from 'react';;
import './navbar.css';

function Navbar () {
  const [dropdownOpen, setDropdownOpen] = useState (false);

  const toggle = () => setDropdownOpen (prevState => !prevState);

  return (
	  <div>
		  <nav className="navbar navbar-expand-md navbar-dark bg-yellow">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <h2> Campus Baazar </h2>
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>          
          <li className="nav-item">
            <a className="nav-link" href="/shop">
              Shop
            </a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="/add-product">
              Sell Stuff
            </a>
          </li>  */}
          <li className="nav-item">
            <a className="nav-link" href="/contact">
              Contact Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
	  </div>
  );
}

export default Navbar;