import { Routes, Route } from 'react-router-dom';
import Navigation from 'pages/Navigation';
import HomePage from '../pages/HomePages';
import MoviesPage from '../pages/MoviesPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import NotFound from '../pages/NotFound';
import Cast from './Cast';
import Reviews from './Reviews';

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/movies" element={<MoviesPage />}></Route>
        <Route path="/movies/:id" element={<MovieDetailsPage />}>
          <Route path="/movies/:id/cast" element={<Cast />}></Route>
          <Route path="/movies/:id/reviews" element={<Reviews />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
