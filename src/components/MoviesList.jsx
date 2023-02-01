import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import imgNot from '../img/notimg.webp';

const MoviesList = ({ movies, location }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <li key={movie.id}>
            <Link to={`movies/${movie.id}`} state={{ from: location }}>
              <p>{movie.title}</p>
              {/* 
                {movie.poster_path === null ? (
                  <img
                    // className={styles.listItemImage}
                    src={imgNot}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    // className={styles.listItemImage}
                    // src={`https:{movie.poster_path}`}
                    alt={movie.title}
                  />
                )} */}
            </Link>
          </li>
        ))}
    </>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

export default MoviesList;
