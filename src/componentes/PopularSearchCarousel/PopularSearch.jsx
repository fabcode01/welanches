import styles from "./PopularSearch.module.css";
import { Link } from "react-router-dom";

const PopularSearch = () => {
  return (
    <div className={styles.popular_container}>
      <h2>Pesquisas populares</h2>
      <ul>
        <li>pães</li>
        <li>coxinha</li>
        <li>pizzas</li>
        <li>pastéis</li>
      </ul>

      <div style={{display: "flex", justifyContent: "center"}}>
      <Link to='/produtos'><button>VER TUDO</button></Link>
      </div>
    </div>
  );
};

export default PopularSearch;
