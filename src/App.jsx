import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/shared/Footer/Footer";
import Home from "./components/pages/IngredientsList/Home.jsx";
import Header from "./components/shared/Header/Header";
import DrinkList from "./components/pages/DrinkList/DrinkList";
import DrinkDetail from "./components/pages/DrinkDetail/DrinkDetail";

import { useState } from "react";
import { IngredientsContext } from "./contexts/IngredientsContext.jsx";

import AddDrink from "./components/pages/AddDrink/AddDrink";


function App() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [displayIngredients, setDisplayIngredients] = useState([]);

  return (
    <>

      <IngredientsContext.Provider
        value={{
          ingredientsList,
          setIngredientsList,
          displayIngredients,
          setDisplayIngredients,
        }}
      >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/drinklist/:name" element={<DrinkList />} />
          <Route path="/drinklist/details/:id" element={<DrinkDetail />} />
        </Routes>
        <Footer />
      </IngredientsContext.Provider>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drinklist/:name" element={<DrinkList />} />
        <Route path="/drinklist/details/:id" element={<DrinkDetail />} />
        <Route path='/adddrink' element={<AddDrink/>} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
