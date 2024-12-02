import styles from "./ingredient.module.css";

export default function Ingredient({ item }) {
  return (
    <div>
      <div className={styles.ingredientContainer}>
        <div className={styles.imageContainer}>
          <img
            src={
              `https://spoonacular.com/cdn/ingredients_100x100/` + item.image
            }
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
