import RecipeItem from "./RecipeItem";

export default function RecipeList({ recipeData }) {
  return (
    <div>
      {recipeData.map((recipe) => (
        <div key={recipe.id}>
          <RecipeItem recipe={recipe} />
        </div>
      ))}
    </div>
  );
}
