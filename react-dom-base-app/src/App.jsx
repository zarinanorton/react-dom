import { useState, useTransition } from 'react'
import NavBar from './nav/NavBar';
import Card from './card/Card';
import Loader from './loader/Loader';
import CreateListing from './modal/CreateListing';
import './App.css'

const canonicalItems = [{name: "Old Nails", description: "Old Nails for Sale"},
    {name: "Old Tiles", description: "Old Tiles for Sale"},
    {name: "Old Car", description: "Old Car for Sale"}]

const canonicalStates = {
    'Create__Listing' : 1
    };

function App() {
  const [isPending, startTransition] = useTransition(false);
  const [state, setState] = useState(0);
  const [items, setItems] = useState(canonicalItems);

  function switchState(state) {
      setState(canonicalStates[state]);
  }

  function getItems(search) {
      startTransition(() => {
          setItems(filterItems(search, canonicalItems));
                });
   }

   function filterItems(search, items) {
       if (!search) {
           return items;
       } else {
           const searchLowerCased = search.toLowerCase();
           return items.filter(item => item.name.toLowerCase().includes(searchLowerCased) || item.description.toLowerCase().includes(searchLowerCased));
       }
   }

  return (
    <>
        <div className="sidebar"><NavBar searchState={[getItems, switchState]}/></div>
        <div className="main">
            <Loader isVisible={isPending}/>
            <div className="card-container">{items.map(item => (<Card item={item} />))}</div>
        </div>
        <CreateListing state={[state, switchState]}/>
    </>
  )
}

export default App;
