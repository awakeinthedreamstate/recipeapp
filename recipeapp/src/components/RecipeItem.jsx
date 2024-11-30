import styles from "./recipeitem.module.css";

export default function RecipeItem({ recipe, setSelectedRecipe }) {
  function setSelection() {
    setSelectedRecipe(recipe.id);
  }

  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={recipe.image} />
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{recipe.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button onClick={setSelection} className={styles.itemButton}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
