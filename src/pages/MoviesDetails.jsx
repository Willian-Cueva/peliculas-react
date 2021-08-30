
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "../Spinner/Spinner";
import { get } from "../utils/httpCliente";
import styles from "./MovieDetails.module.css";
export function MovieDetails() {
  const {movieId} = useParams();
  const [movie,setMovie] = useState(null); 
  const [isLoading,setIsLoading] = useState(true);

  useEffect(()=>{
    setIsLoading(true);
    get(`/movie/${movieId}`).then(data=>{
      setMovie(data);
      setIsLoading(false);
    })
  },[movieId])

  if(isLoading)return <Spinner/>
  
  // if (!movie) {
  //   return null; 
  // }
  
  const imageUrl = "https://image.tmdb.org/t/p/w500" + movie.poster_path; 
  return (
    <div className={styles.detailsContainer}>
      <img className={styles.col+" "+styles.movieImage} src={imageUrl} alt={movie.title} />
      <div className={`${styles.col} ${styles.movieDetails}`}>
        <p className={`${styles.firstItem}`}><strong>Titulo:</strong> {movie.title}</p>
        <p>
          <strong>Generos: </strong>
          {movie.genres.map(genre => genre.name).join(", ")}
        </p>
        <p><strong>Descripcion:</strong> {movie.overview}</p>
      </div>
    </div>
  );
}
