import { useEffect, useState } from "react";
import styles from "./recipedetails.module.css";
import IngredientList from "./IngredientList";

export default function RecipeDetails({ selectedRecipe }) {
  const URL = `https://api.spoonacular.com/recipes/${selectedRecipe}/information`;
  const API_KEY = "9799ca342bf546108b582ff8377b1022";
  const [recipe, setRecipe] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function fetchRecipe() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setRecipe(data);
      setIsLoading(false);
    }
    selectedRecipe ? fetchRecipe() : () => {};
  }, [selectedRecipe]);
  return (
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{recipe.title}</h1>
        <img className={styles.recipeImage} src={recipe.image} />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {recipe.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>👪 Serves {recipe.servings}</strong>
          </span>
          <span>
            <strong>
              {recipe.vegetarian ? "🥕 Vegetarian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>{recipe.vegan ? "🐄 Vegan" : ""}</span>
        </div>
        <div>
          <span>
            <strong>
              💰 ${(recipe.pricePerServing / 100).toFixed(2)} per serving
            </strong>
          </span>
        </div>
      </div>
      <h2>Ingredients</h2>
      <IngredientList recipe={recipe} isLoading={isLoading} />
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            recipe.analyzedInstructions[0].steps.map((step) => (
              <li key={step.step}>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}
