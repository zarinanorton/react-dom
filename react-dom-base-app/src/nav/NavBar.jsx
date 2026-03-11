import { useState } from 'react'
import './NavBar.css';

function NavBar({searchState}) {
    console.log(searchState);
    const [searchStr, setSearchStr] = searchState;

    const search = () => {
        setSearchStr(document.getElementById('search').value);
    }

  return (
      <div className="nav">
          <ul><li key="home">Home</li><li key=""></li></ul>
          <div className="search-group">
              <input type="text" id="search"/>
              <button className="" onClick={search}>Search</button>
          </div>
      </div>
  )
}

export default NavBar;
