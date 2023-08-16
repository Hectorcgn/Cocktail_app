import React from 'react'

function AddDrinkForm(props) {
  return (
    <form onSubmit={props.onhandleOnSubmit}>
      <input type="text" placeholder='Name' data-key='strDrink' onChange={props.onHandleInput} value={props.drinkNameValue} required/>
      <input type="text" placeholder='Kategorie' data-key="strCategory" onChange={props.onHandleInput} value={props.drinkCategoryValue}/>
      <input type="text" placeholder='Bild URL' data-key="strDrinkThumb" onChange={props.onHandleInput} value={props.drinkUrlValue} required/>
      <input type="text" placeholder='Anleitung' data-key="strInstructionsDE" onChange={props.onHandleInput} value={props.drinkInstructionsValue}/>
      <input type="text" placeholder='Zutat 1' data-key="strIngredient1" onChange={props.onHandleInput} value={props.drinkIngredient1Value}/>
      <input type="text" placeholder='Menge Zutat 1' data-key="strMeasure1" onChange={props.onHandleInput} value={props.drinkMeasure1Value}/>
      <input type="text" placeholder='Zutat 2' data-key="strIngredient2" onChange={props.onHandleInput} value={props.drinkIngredient2Value}/>
      <input type="text" placeholder='Menge Zutat 2' data-key="strMeasure2" onChange={props.onHandleInput} value={props.drinkMeasure2Value}/>
      <input type="text" placeholder='Zutat 3' data-key="strIngredient3" onChange={props.onHandleInput} value={props.drinkIngredient3Value}/>
      <input type="text" placeholder='Menge Zutat 3' data-key="strMeasure3" onChange={props.onHandleInput} value={props.drinkMeasure3Value}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default AddDrinkForm