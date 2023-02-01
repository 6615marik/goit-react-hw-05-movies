import React, { Suspense } from 'react';
import MagnifyingGlas from '../components/MagnifyingGlass';
import { Link, useLocation } from 'react-router-dom';
// import styles from './MovieDetailsPage.module.css';
import MovieDetailsList from '../components/MovieDetailsList';

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = location.state?.from ?? '/movies';

  return (
    <>
      <button
      // className={styles.backButton}
      >
        <Link to={backLink}>Back to movie list</Link>
      </button>

      <h3
      // className={styles.title}
      >
        Movie Details Page
      </h3>
      <div
      // className={styles.detailsContainer}
      >
        <Suspense fallback={<MagnifyingGlas />}>
          <MovieDetailsList />
        </Suspense>
      </div>
    </>
  );
};
export default MovieDetailsPage;
