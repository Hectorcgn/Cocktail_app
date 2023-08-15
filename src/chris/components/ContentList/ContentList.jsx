import { AutoGrid } from "../../shared/AutoGrid/AutoGrid.jsx";
import { useEffect, useState } from "react";
import { ContentTile } from "../../shared/ContentTile/ContentTile.jsx";

export const ContentList = () => {
  const [ingredientsList, setIngredientsList] = useState([]);

  useEffect(() => {
    getIngredientsList();
  }, []);

  const getIngredientsList = async () => {
    try {
      const res = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
      );
      const ingData = await res.json();
      setIngredientsList(
        Object.values(ingData.drinks).map((ing) => ing.strIngredient1),
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(ingredientsList);
  return (
    <>
      <AutoGrid>
        {ingredientsList.map((item, i) => (
          <ContentTile
            key={i}
            category={item}
            discription={"Lorem Ipsum Bla bla bla"}
          />
        ))}
      </AutoGrid>
    </>
  );
};
