import React from 'react';
import './search.css';

function Search() {
    return (
        <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input className="search_input" type="text" name placeholder="Search..." />
            <a href="#" className="search_icon"><i className="fa fa-search" /></a>
          </div>
        </div>
      </div>
    )
}
export default Search;
