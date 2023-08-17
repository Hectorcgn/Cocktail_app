import React, { useEffect, useState } from "react";
import { detailDrinkApi } from "../../../utilities/detailDrinkApi";
import "./DrinkDetail.scss";
import { useParams } from "react-router-dom";

function DrinkDetail() {
  const [drink, setDrink] = useState({});

  let drinkId =
    useParams().id === "random"
      ? "https://www.thecocktaildb.com/api/json/v1/1/random.php"
      : `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${
          useParams().id
        }`;

  const drinkId = useParams().id;
  const myDrinks = JSON.parse(localStorage.getItem('myDrink'));
  const myDrink = myDrinks.find(item => item.idDrink === drinkId);
  const [drink, setDrink] = useState({});
  
  useEffect(() => {
    if (Number(drinkId)) {
      const fetchDetailsDrink = async () => {
      try {
        const res = await fetch(drinkId);
        if (!res.ok) {
          throw new Error(
            `Fetch Status of getIngredientsList ist !ok: ${res.status}`,
          );
        }
        const detailData = await res.json();
        setDrink(detailData.drinks[0]);
      } catch (error) {
        console.error("Error fetching IngredientsList:", error);
      }
    };
    fetchDetailsDrink();
    }else{
      setDrink(myDrink);
    }
  },[])


  return (
    <div className="detail-drink">
      <h1>{drink.strDrink}</h1>
      <div>
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
        <div>
          <h2>Zutaten</h2>
          <p>{drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}

export default DrinkDetail;
