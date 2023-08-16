import React, { useEffect, useState } from 'react'
import './AddDrink.scss'
import AddDrinkForm from '../../shared/AddDrinkForm/AddDrinkForm'

function AddDrink() {

  let myDrink;
  if (localStorage.getItem('myDrink')) {
    myDrink = JSON.parse(localStorage.getItem('myDrink'))
  }else myDrink = {}

  console.log(myDrink)


  const [input, setInput] = useState({});

  const [drinkName, setDrinkName] = useState('');
  const [drinkCategory, setDrinkCategory] = useState('');
  const [drinkUrl, setDrinkUrl] = useState('');
  const [drinkInstructions, setDrinkInstructions] = useState('');
  const [drinkIngredient1, setDrinkIngredient1] = useState('');
  const [drinkIngredient2, setDrinkIngredient2] = useState('');
  const [drinkIngredient3, setDrinkIngredient3] = useState('');
  const [drinkMeasure1, setDrinkMeasure1] = useState('');
  const [drinkMeasure2, setDrinkMeasure2] = useState('');
  const [drinkMeasure3, setDrinkMeasure3] = useState('');

  const HandleInput = (event) => {
    
    switch (event.target.dataset.key) {
      case 'strDrink':
        setDrinkName(event.target.value)
        break;
      case "strCategory":
        setDrinkCategory(event.target.value)
        break;
      case "strDrinkThumb":
        setDrinkUrl(event.target.value)
        break;
      case "strInstructionsDE":
        setDrinkInstructions(event.target.value)
        break;
      case "strIngredient1":
        setDrinkIngredient1(event.target.value)
        break;
      case "strIngredient2":
        setDrinkIngredient2(event.target.value)
        break;
      case "strIngredient3":
        setDrinkIngredient3(event.target.value)
        break;
      case "strMeasure1":
        setDrinkMeasure1(event.target.value)
        break;
      case "strMeasure2":
        setDrinkMeasure2(event.target.value)
        break;
      case "strMeasure3":
        setDrinkMeasure3(event.target.value)
        break;
    }
  }

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newMyDrink = {...myDrink, input}
    localStorage.setItem('myDrink' , JSON.stringify(newMyDrink));
  }

  useEffect(() => {
    setInput({
      'strDrink': drinkName,
      "strCategory": drinkCategory,
      "strDrinkThumb": drinkUrl,
      "strInstructionsDE": drinkInstructions,
      "strIngredient1": drinkIngredient1,
      "strIngredient2": drinkIngredient2,
      "strIngredient3": drinkIngredient3,
      "strMeasure1": drinkMeasure1,
      "strMeasure2": drinkMeasure2,
      "strMeasure3": drinkMeasure3
    })
  }, [drinkName, drinkCategory, drinkUrl, drinkInstructions, drinkIngredient1, drinkIngredient2, drinkIngredient3, drinkMeasure1, drinkMeasure2, drinkMeasure3])

  return (
    <div className='add-drink'>
      <h1>Füge deine eigenen Getränke hinzu!</h1>
      <div>
        <AddDrinkForm onHandleInput={HandleInput} onhandleOnSubmit={handleOnSubmit}/>
        <div></div>
      </div>
    </div>
  )
}

export default AddDrink