import { useContext, useEffect, useState } from "react";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid.jsx";
import { IngredientTile } from "../../shared/IngredientTile/IngredientTile.jsx";
import { getIngredientsList } from "../../../functions/fetch/ingredientsFetch.jsx";
import { IngredientsContext } from "../../../contexts/FetchDataContext.jsx";

function IngredientsList() {
  const [fetchOutcome, setFetchOutcome] = useState(false);

  const { setIngredients, displayIngredients } = useContext(IngredientsContext);

  useEffect(() => {
    getIngredientsList(setIngredients, setFetchOutcome);
  }, []);

  return (
    <>
      {fetchOutcome ? (
        <AutoGrid>
          {displayIngredients.map((ingredient) => (
            <IngredientTile
              // onClickP={() => setSwitchToDrinks(true)}
              key={ingredient}
              linkName={ingredient.replaceAll(" ", "+").toLowerCase()}
              name={ingredient}
            />
          ))}
        </AutoGrid>
      ) : (
        <p>loading...</p>
      )}
    </>
  );
}

export default IngredientsList;
