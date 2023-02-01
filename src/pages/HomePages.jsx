import { useState, useEffect, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { getMovies } from '../servises/api';
import MoviesList from 'components/MoviesList';
import MagnifyingGlas from '../components/MagnifyingGlass';

const HomePages = () => {
  const [movies, setMovies] = useState(null);
  const location = useLocation();

  useEffect(() => {
    getMovies()
      .then(setMovies)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      <ul>
        <Suspense fallback={<MagnifyingGlas />}>
          <MoviesList movies={movies} location={location} />
        </Suspense>
      </ul>
    </>
  );
};
export default HomePages;
