import React from 'react'
import DrinkItem from '../../shared/DrinkItem/DrinkItem'
import { AutoGrid } from '../../shared/AutoGrid/AutoGrid';

function MyDrinks() {
  const myDrinks = JSON.parse(localStorage.getItem('myDrink'))
  console.log(myDrinks)
  
  return (
    <ul className="drinklist">
      
      <AutoGrid>
        {myDrinks.map(myDrink =>(
        <DrinkItem
          key={myDrink.idDrink}
          id={myDrink.idDrink}
          name={myDrink.strDrink}
          img={myDrink.strDrinkThumb}
          />))}
      </AutoGrid>
    </ul>
  )
}

export default MyDrinks