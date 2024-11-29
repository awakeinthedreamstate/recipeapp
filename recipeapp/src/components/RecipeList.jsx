import styles from "./recipelist.module.css";

export default function RecipeList({ recipeData }) {
  return (
    <div className={styles.listPane}>
      {recipeData.map((recipe) => (
        <div className={styles.recipeItem} key={recipe.id}>
          <img src={recipe.image} />
          <h3 className={styles.recipeTitle}>{recipe.title}</h3>
        </div>
      ))}
    </div>
  );
}
