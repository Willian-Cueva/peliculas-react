import { useEffect, useState } from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import { Spinner } from "../Spinner/Spinner";
import { get } from "../utils/httpCliente";
import styles from "./MoviesGrid.module.css";

export function MoviesGrid() {
  // console.log(movies[4].id);
  const [movies, setMovies] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])
  useEffect(() => {
    // fetch("https://api.themoviedb.org/3/discover/movie")
    get("/discover/movie").then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={styles.moviesGrid}>
      {movies.map((movie) => (
        
        <MovieCard
          id={movie.id}
          titulo={movie.title}
          imagen={movie.poster_path}
        ></MovieCard>
      ))}
    </ul>
  );
}
