import { useState } from 'react';
import './Card.css';
import SeeMoreModal from '../see-more/SeeMoreModal';

function Card({ state }) {
    const [item, dispatch] = state;

    function seeMore() {
        dispatch({action: 'See__More', item: item});
    }

    return (
        <div className="card" onClick={seeMore}>
            <div className="header">{item.name}</div>
            <div className="body">{item.description}</div>
            <div className="footer"><button></button></div>
        </div>);
}

export default Card;