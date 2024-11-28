import { useEffect, useState } from "react";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "xxxxxxxxxxxxxxxxxxxxxxxxx";

export default function Search({ recipeData, setRecipeData }) {
  const [query, setQuery] = useState("pizza");
  //syntax of the useEfect hook
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data.results);
      setRecipeData(data.results);
    }
    fetchRecipe();
  }, [query]);
  return (
    <div>
      <input
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
