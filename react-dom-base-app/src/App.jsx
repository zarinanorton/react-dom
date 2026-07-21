import { useState, useTransition, useReducer } from 'react'
import NavBar from './nav/NavBar';
import Card from './card/Card';
import Loader from './loader/Loader';
import CreateListing from './create-listing/CreateListing';
import SeeMoreModal from './see-more/SeeMoreModal';
import {CanonicalStates} from './constants/States.js';
import './App.css'

const canonicalItems = [{name: "Old Nails", description: "Old Nails for Sale"},
    {name: "Old Tiles", description: "Old Tiles for Sale"},
    {name: "Old Car", description: "Old Car for Sale"}]

// state is {action: '', search: '', prev_search_hash: ''}
function App() {
  const [isPending, startTransition] = useTransition(false);
  const [isCreateListingVisible, setCreateListingVisibility] = useState(false);
  const [isSeeMoreModalVisible, setSeeMoreModalVisibility] = useState(false);
  const [seeMoreOfItem, setSeeMoreOfItem] = useState({});

  const [items, dispatch] = useReducer(switchState, {action: '', search: null, prev_search_hash: null, item: null}, getItems);

  function switchState(items, state) {
      if (state.action == 'Create__Listing') {
          setCreateListingVisibility(true);
          return items;
      } else if (state.action == 'See__More') {
          setSeeMoreOfItem(state.item)
          setSeeMoreModalVisibility(true);
          return items;
      } else {
        return filterItems(state.search, items);
      }
  }

  function mergeState() {
      // merge current state with old state
  }

  function getItems(state) {
      // startTransition(() => { filterItems(state.search, canonicalItems) });
      return filterItems(state.search, canonicalItems);
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
            <div className="card-container">{items.map(item => (<Card
                state={[item, dispatch]} />))}</div>
        </div>
        <CreateListing state={[isCreateListingVisible, setCreateListingVisibility]}/>
        <SeeMoreModal state={[seeMoreOfItem, isSeeMoreModalVisible, setSeeMoreModalVisibility]}/>
    </>
  )
}

export default App;
