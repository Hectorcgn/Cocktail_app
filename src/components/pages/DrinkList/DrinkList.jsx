import React, { useContext, useEffect, useState } from "react";
import "./DrinkList.scss";
import DrinkItem from "../../shared/DrinkItem/DrinkItem";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid";
import { useLocation, useParams } from "react-router-dom";
import {
  DrinkContext,
  IngredientsContext,
} from "../../../contexts/FetchDataContext.jsx";
import { ClipLoader } from "react-spinners";

function DrinkList() {
  const [isLoading, setIsLoading] = useState(true);
  const locationBefore = useParams().name;
  const { ingredients } = useContext(IngredientsContext);
  const { setDrinkList, displayDrinkList, drinkList } =
    useContext(DrinkContext);
  const [myDrink, setMyDrink] = useState([]);
  const [randomIngredients, setRandomIngredients] = useState([]);

  useEffect(() => {
    const savedMyDrink = localStorage.getItem("myDrink");
    if (savedMyDrink) {
      const parsedMyDrink = JSON.parse(savedMyDrink);
      setMyDrink(parsedMyDrink);
    }
    setRandomIngredients(
      ingredients.sort((a, b) => a.random - b.random).slice(0, 8),
    );
  }, [setDrinkList]);

  const apiLink = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

  useEffect(() => {
    const getDrinkList = async () => {
      try {
        const res = await fetch(`${apiLink}${locationBefore}`);
        if (!res.ok) {
          throw new Error(
            `Fetch Status of getDrinkList ist !ok: ${res.status}`,
          );
        }
        const drinkData = await res.json();
        setDrinkList(drinkData.drinks); // setDrinkList([...drinkData.drinks, ...myDrink]);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching DrinkList:", error);
      }
    };
    const getAllDrinks = async () => {
      try {
        const res = await Promise.all(
          randomIngredients.map(async (ingredient) => {
            const res = await fetch(
              `${apiLink}${ingredient.replaceAll(" ", "+").toLowerCase()}`,
            );
            if (!res.ok) {
              throw new Error("Fetch failed all Drinks");
            }
            setIsLoading(false);
            const allDrinksList = await res.json();
            const mergedDrinksList = Object.assign({}, allDrinksList);
            setDrinkList([...mergedDrinksList.drinks, ...myDrink]);
          }),
        );
      } catch (error) {
        console.error("Error fetching DrinkList:", error);
      }
    };
    if (locationBefore === "alldrinks") {
      getAllDrinks();
    } else {
      getDrinkList();
    }
  }, [randomIngredients]);

  if (isLoading) {
    return (
      <>
        <ClipLoader />
      </>
    );
  }

  return (
    <ul className="drinklist">
      <AutoGrid>
        {displayDrinkList.map((drink) => (
          <DrinkItem
            key={drink.idDrink}
            id={drink.idDrink}
            name={drink.strDrink}
            img={drink.strDrinkThumb}
          />
        ))}
      </AutoGrid>
    </ul>
  );
}

export default DrinkList;
