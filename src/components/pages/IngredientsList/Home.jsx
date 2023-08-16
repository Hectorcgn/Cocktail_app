import { useEffect, useState } from "react";
import { AutoGrid } from "../../shared/AutoGrid/AutoGrid.jsx";
import { ContentTile } from "../../shared/ContentTile/ContentTile.jsx";
import { getIngredientsList } from "../../../functions/fetch/ingredientsFetch.jsx";

function Home() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [fetchOutcome, setFetchOutcome] = useState(false);

  useEffect(() => {
    getIngredientsList(setIngredientsList, setFetchOutcome);
  }, []);

  console.log(ingredientsList);
  return (
    <>
      <AutoGrid>
        {ingredientsList.map((ingredient) => (
          <ContentTile
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
