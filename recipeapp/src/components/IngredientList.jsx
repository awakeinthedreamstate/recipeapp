import Ingredient from "./Ingredient";

export default function IngredientList({ recipe, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        recipe.extendedIngredients.map((item) => (
          <Ingredient key={item.id} item={item} />
        ))
      )}
    </div>
  );
}