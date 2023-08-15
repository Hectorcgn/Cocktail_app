import React from 'react'
import './DrinkItem.scss';

function DrinkItem(props) {
    return (
        <li>
            <h3>{props.name}</h3>
            <img src={props.img} alt="coctail.img"/>

        </li>
    )
}

export default DrinkItem