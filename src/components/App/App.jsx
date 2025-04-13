import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import HomePage from "../../pages/HomePage";
import MoviesPage from "../../pages/MoviesPage";
import css from "./App.module.css";

export default function App() {
  return (
    <div className={css.container}>
      <Navigation className={css.nav} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
      </Routes>
    </div>
  );
}
