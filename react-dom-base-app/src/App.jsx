import { useState, useTransition } from 'react'
import NavBar from './nav/NavBar';
import Card from './card/Card';
import Loader from './loader/Loader';
import './App.css'

const canonicalItems = [{name: "Old Nails", description: "Old Nails for Sale"},
    {name: "Old Tiles", description: "Old Tiles for Sale"},
    {name: "Old Car", description: "Old Car for Sale"}]

function App() {
  const [isPending, startTransition] = useTransition(false);

  const [items, setItems] = useState(canonicalItems);
  const [search, setSearch] = useState('');

  function getItems() {
      startTransition(() => {
          setItems(filterItems(search));
                });
   }

   function filterItems(search) {
       if (!search) {
           return items;
       } else {
           return items.filter(item.name.includes(search) || item.description.includes(search));
       }
   }

  return (
    <>
        <div className="sidebar"><NavBar searchState={[search, setSearch]}/></div>
        <div className="main">
            <Loader isVisible={isPending}/>
            <button onClick={getItems}>Get Items</button>
            <div>{items.map(item => (<Card item={item} />))}</div>
        </div>
    </>
  )
}

export default App;
