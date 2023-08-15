import React, { useEffect, useState } from 'react'
import { detailDrinkApi } from '../../../utilities/detailDrinkApi'
import './DrinkDetail.scss'
import { useParams } from 'react-router-dom'

function DrinkDetail() {

  const [drink, setDrink] = useState({})
 const drinkId = useParams().id 
  useEffect(() => {
    fetch(`${detailDrinkApi}${drinkId}`)
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