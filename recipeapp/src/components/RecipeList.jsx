import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipeData, setSelectedRecipe }) {
  return (
    <div>
      {recipeData.map((recipe) => (
        <div key={recipe.id}>
          <RecipeItem recipe={recipe} setSelectedRecipe={setSelectedRecipe} />
        </div>
      ))}
    </div>
  );
}
