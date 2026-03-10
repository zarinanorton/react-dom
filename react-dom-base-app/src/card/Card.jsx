import { useState } from 'react'

function Card({ item }) {

    return (<div className="card">
            <div className="header">{item.name}</div>
            <div className="body">{item.description}</div>
            <div className="footer"><button></button></div>
        </div>);

}

export default Card;