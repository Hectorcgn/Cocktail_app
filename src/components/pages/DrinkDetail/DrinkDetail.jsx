import React, { useEffect, useState } from "react";
import { detailDrinkApi } from "../../../utilities/detailDrinkApi";
import "./DrinkDetail.scss";
import { useParams } from "react-router-dom";

function DrinkDetail() {
  const [drink, setDrink] = useState({});
  const drinkId = useParams().id;
  const myDrinks = JSON.parse(localStorage.getItem('myDrink'));
  const myDrink = myDrinks.find(item => item.idDrink === drinkId);

  useEffect(() => {
    if (drinkId === "random") {
      if (drinkId === "random") {
        const fetchDetailsDrink = async () => {
          try {
            const res = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
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
      }
    }else if (Number(drinkId)) {
      fetch(`${detailDrinkApi}${drinkId}`)
        .then(res => res.json())
        .then(data => setDrink(data.drinks[0]))
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
