import React, { useEffect, useState } from 'react'
import DrinkItem from '../../shared/DrinkItem/DrinkItem'
import { AutoGrid } from '../../shared/AutoGrid/AutoGrid';
import './MyDrink.scss'

function MyDrinks() {
  const myDrinks = JSON.parse(localStorage.getItem('myDrink'));
  const [displayMyDrink, setDisplayMyDrink] = useState(myDrinks)

  const handleDeleteDrink = (event) => {
    const newMyDrinksList = myDrinks.filter(item => item.idDrink !== event.target.id)
    localStorage.setItem('myDrink', JSON.stringify(newMyDrinksList))
    setDisplayMyDrink(newMyDrinksList)
  }
  
  
  return (
    <ul className="drinklist">
      <AutoGrid>
        {displayMyDrink.map(myDrink =>(
          <div className='mydrink-item' key={myDrink.idDrink}>
            <DrinkItem
              id={myDrink.idDrink}
              name={myDrink.strDrink}
              img={myDrink.strDrinkThumb}/>
            <button className='delete-drink' id={myDrink.idDrink} onClick={handleDeleteDrink}>x</button>  
          </div>
            ))}
      </AutoGrid>
    </ul>
  )
}

export default MyDrinks