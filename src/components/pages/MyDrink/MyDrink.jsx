import React, { useState } from 'react'
import DrinkItem from '../../shared/DrinkItem/DrinkItem'
import { v4 as uuidv4 } from 'uuid';
import { AutoGrid } from '../../shared/AutoGrid/AutoGrid';

function MyDrink() {
    const myDrinks = localStorage.getItem('myDrink').map(item => item.id = uuidv4())
    
    return (
        <ul className="drinklist">
        <AutoGrid>
            {myDrinks.map(myDrink => <DrinkItem 
            key={myDrink.id}
            id={myDrink.id}
            name={myDrink.strDrink}
            img={myDrink.strDrinkThumb}
            />)}
        </AutoGrid>
        </ul>
    )
}

export default MyDrink