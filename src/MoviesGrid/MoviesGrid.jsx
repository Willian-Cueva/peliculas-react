import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { MovieCard } from "../MovieCard/MovieCard";
import { Spinner } from "../Spinner/Spinner";
import { get } from "../utils/httpCliente";
import styles from "./MoviesGrid.module.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

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
  // const location = useLocation();
  // console.log("this is location",location.search);

  const query = useQuery();
  const search = query.get("search");
  console.log(search);

  useEffect(() => {
    const searchURL = search?"/search/movie?query="+search:"/discover/movie"
    // fetch("https://api.themoviedb.org/3/discover/movie")
    get(searchURL).then((data) => {
      setMovies(data.results);
      setisLoading(false);
    });
  }, [search]);

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
