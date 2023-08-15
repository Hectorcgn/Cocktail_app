import React, { useEffect, useState } from "react";
import "./DrinkList.scss";
import DrinkItem from "../shared/DrinkItem/DrinkItem";
import { AutoGrid } from "../shared/AutoGrid/AutoGrid";
import { useParams } from "react-router-dom";

function DrinkList() {
  const ingName = useParams().name;
  const [drinklist, setDrinkList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetchPokemons");
        }
        return response.json();
      })
      .then((drinksdata) => {
        setDrinkList(drinksdata.drinks);
        setIsLoading(false);
      });
    console.log(drinklist);
  }, []);
  if (isLoading) {
    return (
      <li>
        <p>Loading...</p>
      </li>
    );
  }
  return (
    <ul className="drinklist">
      <AutoGrid>
        {drinklist.map((drinkItem) => (
          <DrinkItem
            key={drinkItem.idDrink}
            id={drinkItem.idDrink}
            name={drinkItem.strDrink}
            img={drinkItem.strDrinkThumb}
          />
        ))}
      </AutoGrid>
    </ul>
  );
}

export default DrinkList;
