import { useState } from 'react'
import './NavBar.css';

function NavBar({searchState}) {
    const [getItems, switchState] = searchState;

    const search = () => {
        const searchStr = document.getElementById('search').value;
        getItems(searchStr);
    }

  return (
      <div className="nav">
          <ul><li key="home" onClick={() => switchState('Create__Listing')}>Create Listing</li></ul>
          <div className="search-group">
              <input type="text" id="search"/>
              <button className="" onClick={search}>Search</button>
          </div>
      </div>
  )
}

export default NavBar;
