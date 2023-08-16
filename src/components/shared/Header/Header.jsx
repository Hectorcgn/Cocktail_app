import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";

import { useLocation } from "react-router-dom";
import {
  DrinkContext,
  IngredientsContext,
} from "../../../contexts/FetchDataContext.jsx";

function Header() {
  const { ingredients, setDisplayIngredients } = useContext(IngredientsContext);
  const { drinkList, setDisplayDrinkList } = useContext(DrinkContext);
  const [inputSearch, setInputSearch] = useState("");
  const [switchToDrinks, setSwitchToDrink] = useState(false);

  const currentLocation = useLocation().pathname;

  useEffect(() => {
    console.log(switchToDrinks);
    setInputSearch("");
    if (currentLocation === "/") {
      setSwitchToDrink((prevState) => false);
    } else {
      setSwitchToDrink((prevState) => true);
    }
  }, [drinkList, ingredients]);

  useEffect(() => {
    if (!switchToDrinks) {
      if (inputSearch === "") {
        setDisplayIngredients([]);
      } else {
        const getDisplayIngredients = ingredients.filter((ingredient) =>
          ingredient.toLowerCase().includes(inputSearch.toLowerCase().trim()),
        );
        setDisplayIngredients(getDisplayIngredients);
      }
    } else if (switchToDrinks) {
      if (inputSearch === "") {
        setDisplayDrinkList(drinkList);
      } else {
        const getDisplayDrinks = drinkList.filter((drink) =>
          drink.strDrink
            .toLowerCase()
            .includes(inputSearch.toLowerCase().trim()),
        );
        setDisplayDrinkList(getDisplayDrinks);
      }
    }
  }, [inputSearch, drinkList, setDisplayDrinkList]);

  const location = useLocation().pathname;

  return (
    <header>
      <Navbar />
      <div className="header-main">
        <h1 className="header-main-title">Cocktails & Getränke!</h1>
        <p className="header-main-p">
          HERZLICH WILLKOMMEN IN DER WELT DER COCKTAILS UND GETRÄNKE!
        </p>
      </div>
      {location !== "/adddrink" && (
        <div>
          <Search
            valueP={inputSearch}
            onChangeP={(event) => setInputSearch(event.target.value)}
          />
          <div className="header-icon">
            <FontAwesomeIcon
              icon={faAnglesDown}
              size="xl"
              style={{ color: "#ffffff" }}
            />
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
