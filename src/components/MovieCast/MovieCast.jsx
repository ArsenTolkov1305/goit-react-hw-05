import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import css from "./MovieCast.module.css";

const API_URL = "https://api.themoviedb.org/3/movie";
const BEARER_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGU5NWZmYTk0MmRhN2RjZjFlYzU4MTdmMGM1ZmE0MCIsIm5iZiI6MTc0NDU0MDE4My40MjQsInN1YiI6IjY3ZmI5MjE3ZWE4MGQ4NTE3NTlhMmM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpuVF9RtdWnCZFZzhVH4EUF-X2LmeBajAwBEnXkbgqc";

export default function MovieCast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${movieId}/credits`, {
        headers: { Authorization: BEARER_TOKEN },
      })
      .then((response) => setCast(response.data.cast))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {cast.map((actor) => (
        <li key={actor.id} className={css.item}>
          <img
            src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
            alt={actor.name}
            className={css.photo}
          />
          <p>{actor.name}</p>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}
