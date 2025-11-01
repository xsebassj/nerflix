import Card from "../card/Card";
import styles from "./List.module.css";
import { movies } from "../../data/movies";

function List() {
  return (
    <div className={styles.list}>
      {movies.map((movie) => (
        <Card
          key={movie.id}
          title={movie.title}
          image={movie.image}
          description={movie.description}
        />
      ))}
    </div>
  );
}

export default List;
