import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/shared/Footer/Footer";
import IngredientsList from "./components/pages/IngredientsList/IngredientsList.jsx";
import Header from "./components/shared/Header/Header";
import DrinkList from "./components/pages/DrinkList/DrinkList";
import DrinkDetail from "./components/pages/DrinkDetail/DrinkDetail";
import { useState } from "react";
import { IngredientsContext } from "./contexts/IngredientsContext.jsx";
import AddDrinks from "./components/pages/AddDrink/AddDrinks";
import MyDrink from "./components/pages/MyDrink/MyDrink";

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [displayIngredients, setDisplayIngredients] = useState([]);

  return (
    <main>
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
          <Route path="/adddrink" element={<AddDrinks />} />
          <Route path="/mydrink" element={<MyDrink/>} />
        </Routes>
        <Footer />
      </IngredientsContext.Provider>
    </main>
  );
}

export default App;
