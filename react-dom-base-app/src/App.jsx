import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './nav/NavBar';
import Card from './card/Card';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const [items, setItems] = useState([]);

  const getItems = () => {
      setItems([{
            name: "Old Nails",
            description: "Old Nails for Sale"
          }])
   }

  return (
    <>
        <NavBar />
        <button onClick={getItems}>Get Items</button>
        <div>{items.map(item => (<Card item={item} />))}</div>
    </>
  )
}

export default App;
