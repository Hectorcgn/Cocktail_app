import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/shared/Footer/Footer";
import IngredientsList from "./components/pages/IngredientsList/IngredientsList.jsx";
import Header from "./components/shared/Header/Header";
import DrinkList from "./components/pages/DrinkList/DrinkList";
import DrinkDetail from "./components/pages/DrinkDetail/DrinkDetail";
import { useState } from "react";
import AddDrink from "./components/pages/AddDrink/AddDrink";

import {
  DrinkContext,
  IngredientsContext,
} from "./contexts/FetchDataContext.jsx";

import MyDrinks from "./components/pages/myDrink/MyDrinks";




function App() {
  const [ingredients, setIngredients] = useState([]);
  const [displayIngredients, setDisplayIngredients] = useState([]);
  const [drinkList, setDrinkList] = useState([]);
  const [displayDrinkList, setDisplayDrinkList] = useState([]);

  return (

    <main>
      <DrinkContext.Provider
            value={{
          drinkList,
          setDrinkList,
          displayDrinkList,
          setDisplayDrinkList,
        }}
      >
        <IngredientsContext.Provider
          value={{
            ingredients,
            setIngredients,
            displayIngredients,
            setDisplayIngredients,
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<IngredientsList />} />
            <Route path="/drinklist/:name" element={<DrinkList />} />
            <Route path="/drinklist/details/:id" element={<DrinkDetail />} />
            <Route path="/adddrink" element={<AddDrink />} />
            <Route path="/mydrink" element={<MyDrinks/>} />
          </Routes>
          <Footer />
        </IngredientsContext.Provider>
      </DrinkContext.Provider>
    </main>
  );
}

export default App;
