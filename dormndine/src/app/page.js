import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <body className={styles.main}>
        <h1>Dorm-N-Dine</h1>
        <img id="logo" src="/app/img/DormNDineLogo.png" alt="Dorm and Dine logo"/>
        <form class="form">
          <div class="search-bar">
            <input class="query" type="search" placeholder="Search All Recipes..." style={{ width: '400px', height: '40px',}} />
            <button class="bar">Search</button>
          </div>
          <br></br>
          <br></br>
          <h2>Or</h2>
          <br></br>
          <br></br>
          <label htmlFor="meal-type">Meal Type:</label>
          <select id="meal-type" name="meal-type" className={styles.select}>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="snack">Snack</option>
          </select>
          
          <label htmlFor="ingredients">ingredients:</label>
          <select id="ingredients" name="ingredients" className={styles.select}>
            <option value="apples">apples</option>
            <option value="bananas">bananas</option>
            <option value="carrots">cheese</option>
            <option value="lettuce">lettuce</option>
          </select>
          
          <label htmlFor="Restrictions">Restrictions:</label>
          <select id="Restrictions" name="Restrictions" className={styles.select}>
            <option value="Vegan">Vegan</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Gluten Free">Gluten Free</option>
            <option value="Dairy-free">Dairy-free</option>
          </select>
          <br></br>
          <br></br>
          <a href="/new-page">
            <button type="submit">Search</button>
          </a>

        </form>
      </body>
    </div>
  );
}
