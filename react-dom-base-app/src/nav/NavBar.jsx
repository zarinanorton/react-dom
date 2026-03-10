import { useState } from 'react'
import './NavBar.css';

function NavBar() {
  const [count, setCount] = useState(0)

  return (
      <div className="nav"><ul><li>Home</li><li></li></ul><input type="search" /><button className="">Search</button></div>
  )
}

export default NavBar;
