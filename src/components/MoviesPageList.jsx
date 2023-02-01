import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import imgNot from '../img/notimg.webp';

const MoviesPageList = ({ query, movies }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <ul key={movie.id}>
            <li>
              <Link
                to={`/movies/${movie.id}`}
                state={{ from: `/movies?name=${query}` }}
              >
                <p>{movie.title}</p>
                {movie.poster_path === null ? (
                  <img
                    // className={styles.listItemImage}
                    src={imgNot}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    // className={styles.listItemImage}
                    src={`https://image.tmdb.org/t/p/w400${movie.poster_path}`}
                    alt={movie.title}
                  />
                )}
              </Link>
            </li>
          </ul>
        ))}
    </>
  );
};

MoviesPageList.propTypes = {
  query: PropTypes.string,
  movies: PropTypes.array,
};

export default MoviesPageList;
