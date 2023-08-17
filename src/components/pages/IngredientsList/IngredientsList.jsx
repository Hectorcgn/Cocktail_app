import { useContext, useEffect, useState } from "react";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid.jsx";
import { IngredientTile } from "../../shared/IngredientTile/IngredientTile.jsx";
import { getIngredientsList } from "../../../functions/fetch/ingredientsFetch.jsx";
import { IngredientsContext } from "../../../contexts/FetchDataContext.jsx";

function IngredientsList() {
  const [fetchOutcome, setFetchOutcome] = useState(false);

  const { setIngredients, displayIngredients, ingredients } =
    useContext(IngredientsContext);

  useEffect(() => {
    getIngredientsList(setIngredients, setFetchOutcome);
  }, []);

  const getRandomIngredients = () => {
    const name = ingredients[Math.floor(Math.random() * ingredients.length)];
    const link = name.replaceAll(" ", "+").toLowerCase();
    return { name, link };
  };

  if (!fetchOutcome) return;

  const opt1 = getRandomIngredients();
  const opt2 = getRandomIngredients();
  const opt3 = getRandomIngredients();
  const opt4 = getRandomIngredients();

  return (
    <>
      {displayIngredients.length > 0 ? (
        <AutoGrid>
          {displayIngredients.map((ingredient) => (
            <IngredientTile
              key={ingredient}
              linkName={ingredient.replaceAll(" ", "+").toLowerCase()}
              name={ingredient}
            />
          ))}
        </AutoGrid>
      ) : (
        <AutoGrid>
          <IngredientTile name={"All"} linkName={"alldrinks"} />
          <IngredientTile name={"Random Ingredient"} linkName={opt1.link} />
          <IngredientTile name={opt2.name} linkName={opt2.link} />
          <IngredientTile name={opt3.name} linkName={opt3.link} />
          <IngredientTile name={opt4.name} linkName={opt4.link} />
        </AutoGrid>
      )}
    </>
  );
}

export default IngredientsList;
