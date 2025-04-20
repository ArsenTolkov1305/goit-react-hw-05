import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
// import HomePage from "../../pages/HomePage";
// import MoviesPage from "../../pages/MoviesPage";
// import MovieDetailsPage from "../../pages/MovieDetailsPage";
// import MovieCast from "../MovieCast/MovieCast";
// import MovieReviews from "../MovieReviews/MovieReviews";
// import NotFoundPage404 from "../../pages/NotFoundPage.jsx"
import css from "./App.module.css";

const HomePage = lazy(() => import("../../pages/HomePage"));
const MoviesPage = lazy(() => import("../../pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../../pages/MovieDetailsPage"));
const MovieCast = lazy(() => import("../MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("../MovieReviews/MovieReviews"));
const NotFoundPage404 = lazy(() => import("../../pages/NotFoundPage.jsx"));

export default function App() {
  return (
    <div className={css.container}>
      <Navigation className={css.nav} />
      <Suspense fallback={<div>Loading..</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage404 />}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}
