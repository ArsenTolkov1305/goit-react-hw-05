import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import css from "./HomePage.module.css";

const TRENDING_API_URL = "https://api.themoviedb.org/3/trending/movie/day";
const BEARER_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGU5NWZmYTk0MmRhN2RjZjFlYzU4MTdmMGM1ZmE0MCIsIm5iZiI6MTc0NDU0MDE4My40MjQsInN1YiI6IjY3ZmI5MjE3ZWE4MGQ4NTE3NTlhMmM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpuVF9RtdWnCZFZzhVH4EUF-X2LmeBajAwBEnXkbgqc";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(TRENDING_API_URL, {
        headers: { Authorization: BEARER_TOKEN },
      })
      .then((response) => {
        setMovies(response.data.results); // Зберігаємо список трендових фільмів
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <main>
      <h1>Trending Movies</h1>
      <ul className={css.list}>
        {movies.map((movie) => (
          <li key={movie.id} className={css.item}>
            <Link to={`/movies/${movie.id}`} className={css.link}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className={css.poster}
              />
              <h3>{movie.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
