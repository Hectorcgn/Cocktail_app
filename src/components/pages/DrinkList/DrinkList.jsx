import React, { useContext, useEffect, useState } from "react";
import "./DrinkList.scss";
import DrinkItem from "../../shared/DrinkItem/DrinkItem";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid";
import { useParams } from "react-router-dom";
import { DrinkContext } from "../../../contexts/FetchDataContext.jsx";

function DrinkList() {
  const [isLoading, setIsLoading] = useState(true);
  const ingName = useParams().name;
  const { setDrinkList, displayDrinkList } = useContext(DrinkContext);

  useEffect(() => {
    // fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingName}`)
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error("Failed to fetch the datas");
    //     }
    //     return response.json();
    //   })
    //   .then((drinksdata) => {
    //     setDrinkList(drinksdata.drinks);
    //     setIsLoading(false);
    //   });

    const getDrinkList = async () => {
      try {
        const res = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingName}`,
        );
        if (!res.ok) {
          throw new Error(
            `Fetch Status of getDrinkList ist !ok: ${res.status}`,
          );
        }
        const drinkData = await res.json();
        setDrinkList(drinkData.drinks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching DrinkList:", error);
      }
    };
    getDrinkList();
  }, [isLoading]);

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
