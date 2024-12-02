import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "9799ca342bf546108b582ff8377b1022";

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
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        type="text"
      />
    </div>
  );
}
