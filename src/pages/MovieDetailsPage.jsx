import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import css from "./MovieDetailsPage.module.css";

const API_URL = "https://api.themoviedb.org/3/movie";
const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGU5NWZmYTk0MmRhN2RjZjFlYzU4MTdmMGM1ZmE0MCIsIm5iZiI6MTc0NDU0MDE4My40MjQsInN1YiI6IjY3ZmI5MjE3ZWE4MGQ4NTE3NTlhMmM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpuVF9RtdWnCZFZzhVH4EUF-X2LmeBajAwBEnXkbgqc";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${API_URL}/${movieId}?language=en-US`, {
        headers: { Authorization: API_KEY },
      })
      .then((response) => setMovie(response.data))
      .catch((err) => console.error(err));
  }, [movieId]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className={css.details}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className={css.poster}
      />
      <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        <p>Rating: {movie.vote_average}</p>
      </div>
    </div>
  );
}
