import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { IngredientsContext } from "../../../contexts/IngredientsContext.jsx";
import { useLocation } from "react-router-dom";

function Header() {
  const { ingredients, setDisplayIngredients, displayIngredients } =
    useContext(IngredientsContext);

  const [inputSearch, setInputSearch] = useState("");
  const [locationChanged, setLocationChanged] = useState(false);

  useEffect(() => {
    if (inputSearch === "") {
      setDisplayIngredients([]);
    } else {
      setDisplayIngredients(
        ingredients.filter((ingredient) =>
          ingredient.toLowerCase().includes(inputSearch.toLowerCase().trim()),
        ),
      );
    }
  }, [inputSearch]);

  // const location2 = useLocation();

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
