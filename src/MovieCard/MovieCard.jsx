import {Link} from "react-router-dom";
import styles from "./MovieCard.module.css";
export function MovieCard({ id, titulo, imagen }) {
  console.log(styles);
  const imageUrl = "https://image.tmdb.org/t/p/w300" + imagen;
  return (
    <li key={id} className={styles.movieCard}>
      <Link to={"/movies/" + id}>
        <img
          width={230}
          height={345}
          className={styles.movieImage}
          src={imageUrl}
          alt={titulo}
        />
        <div>{titulo}</div>
      </Link>
    </li>
  );
}
