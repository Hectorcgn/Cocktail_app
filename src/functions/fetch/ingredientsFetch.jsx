export const getIngredientsList = async (setIngredients, setFetchOutcome) => {
  try {
    const res = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list",
    );
    if (!res.ok) {
      throw new Error(
        `Fetch Status of getIngredientsList ist !ok: ${res.status}`,
      );
    }
    const ingData = await res.json();
    setIngredients(
      Object.values(ingData.drinks).map((ing) => ing.strIngredient1),
      setFetchOutcome(true),
    );
  } catch (error) {
    console.error("Error fetching IngredientsList:", error);
  }
};
