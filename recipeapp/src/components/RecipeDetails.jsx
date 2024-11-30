import { useEffect, useState } from "react";

export default function RecipeDetails({ selectedRecipe }) {
  const URL = `https://api.spoonacular.com/recipes/${selectedRecipe}/information`;
  const API_KEY = "cdf248bd409040c9a806e53ca61ad83b";
  const [recipe, setRecipe] = useState({});
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
    }
    selectedRecipe ? fetchRecipe() : () => {};
  }, [selectedRecipe]);
  return (
    <div>
      {recipe.title}
      <img src={recipe.image} />
    </div>
  );
}
