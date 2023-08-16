import { useContext, useEffect, useState } from "react";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid.jsx";
import { IngredientTile } from "../../shared/IngredientTile/IngredientTile.jsx";
import { IngredientsContext } from "../../../contexts/IngredientsContext.jsx";
import { getIngredientsList } from "../../../functions/fetch/ingredientsFetch.jsx";

function IngredientsList() {
  const [fetchOutcome, setFetchOutcome] = useState(false);

  const { setIngredients, displayIngredients } = useContext(IngredientsContext);

  useEffect(() => {
    getIngredientsList(setIngredients, setFetchOutcome);
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

export default IngredientsList;
