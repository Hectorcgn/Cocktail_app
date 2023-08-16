import { useContext, useEffect, useState } from "react";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid.jsx";
import { IngredientTile } from "../../shared/IngredientTile/IngredientTile.jsx";
import { getIngredientsList } from "../../../functions/fetch/ingredientsFetch.jsx";
import { IngredientsContext } from "../../../contexts/IngredientsContext.jsx";

function Home() {
  const [fetchOutcome, setFetchOutcome] = useState(false);

  const { setIngredientsList, displayIngredients } =
    useContext(IngredientsContext);

  useEffect(() => {
    getIngredientsList(setIngredientsList, setFetchOutcome);
  }, []);

  return (
    <>
      <AutoGrid>
        {displayIngredients.map((ingredient) => (
          <IngredientTile
            key={ingredient}
            linkName={ingredient.replaceAll(" ", "+").toLowerCase()}
            name={ingredient}
          />
        ))}
      </AutoGrid>
    </>
  );
}

export default Home;
