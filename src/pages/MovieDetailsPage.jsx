import React, { Suspense } from 'react';
import MagnifyingGlas from '../components/MagnifyingGlass';
import { Link, useLocation } from 'react-router-dom';

const MovieDetailsList = React.lazy(() =>
  import('../components/MovieDetailsList')
);

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button>
        <Link to={backLink}>Back to movie list</Link>
      </button>

      <h3>Movie Details Page</h3>
      <div>
        <Suspense fallback={<MagnifyingGlas />}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetailsPage;
