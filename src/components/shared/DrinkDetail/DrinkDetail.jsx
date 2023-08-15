import React, { useEffect, useState } from 'react'
import { detailDrinkApi } from '../../../utilities/detailDrinkApi'
import './DrinkDetail.scss'

function DrinkDetail() {

  const [drink, setDrink] = useState({})
  
  useEffect(() => {
    fetch(`${detailDrinkApi}178309`)
      .then(res => res.json())
      .then(data => setDrink(data.drinks[0]))
  },[])

  return (
    <div className='detail-drink'>
      <h1>{drink.strDrink}</h1>
      <div>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div>
          <h2>Zutaten</h2>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  )
}

export default DrinkDetail