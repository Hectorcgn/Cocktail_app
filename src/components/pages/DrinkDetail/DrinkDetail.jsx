import React, { useEffect, useState } from 'react'
import { detailDrinkApi } from '../../../utilities/detailDrinkApi'
import './DrinkDetail.scss'
import { useParams } from 'react-router-dom'

function DrinkDetail() {

  const drinkId = useParams().id;
  const myDrinks = JSON.parse(localStorage.getItem('myDrink'));
  const myDrink = myDrinks.find(item => item.idDrink === drinkId);
  const [drink, setDrink] = useState({});
  
  useEffect(() => {
    if (Number(drinkId)) {
      fetch(`${detailDrinkApi}${drinkId}`)
        .then(res => res.json())
        .then(data => setDrink(data.drinks[0]))
    }else{
      setDrink(myDrink);
    }
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