import { useState } from "react";
import MovieList from "../components/MovieList/MovieList";
import css from "./MoviesPage.module.css";

export default function MoviesPage() {
  const [query, setQuery] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(query); // Оновлюємо пошуковий запит
  };

  return (
    <main>
      <h1>Search Movies</h1>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie name"
          className={css.input}
        />
        <button type="submit" className={css.button}>
          Search
        </button>
      </form>
      <MovieList searchQuery={searchQuery} />
    </main>
  );
}
