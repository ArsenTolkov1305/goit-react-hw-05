import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import css from "./MovieReviews.module.css";

const API_URL = "https://api.themoviedb.org/3/movie";
const BEARER_TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGU5NWZmYTk0MmRhN2RjZjFlYzU4MTdmMGM1ZmE0MCIsIm5iZiI6MTc0NDU0MDE4My40MjQsInN1YiI6IjY3ZmI5MjE3ZWE4MGQ4NTE3NTlhMmM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cpuVF9RtdWnCZFZzhVH4EUF-X2LmeBajAwBEnXkbgqc";

export default function MovieReviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/${movieId}/reviews`, {
        headers: { Authorization: BEARER_TOKEN },
      })
      .then((response) => setReviews(response.data.results))
      .catch((err) => console.error(err));
  }, [movieId]);

  return (
    <ul className={css.list}>
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <li key={review.id} className={css.item}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <p>No reviews available for this movie.</p>
      )}
    </ul>
  );
}
