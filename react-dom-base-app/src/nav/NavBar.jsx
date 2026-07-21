import { useState } from 'react'
import './NavBar.css';

function NavBar({searchState}) {
    const [getItems, dispatch] = searchState;

    const search = () => {
        const searchStr = document.getElementById('search').value;
        getItems(searchStr);
    }

    function switchState() {
        dispatch({action: 'Create__Listing'});
    }

  return (
      <div className="nav">
          <h2>Builder Grade.</h2>
          <ul><li key="home" onClick={switchState}>Create Listing</li></ul>
          <div className="search-group">
              <input type="text" id="search"/>
              <button className="" onClick={search}>Search</button>
          </div>
      </div>
  )
}

export default NavBar;
