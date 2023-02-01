import React, { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getById } from '../servises/api';
import imgNot from '../img/notimg.webp';
import css from '../components/components.module.css';

const MovieDetailsList = () => {
  const location = useLocation();
  const [moviesId, setMoviesId] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getById(id)
      .then(setMoviesId)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [id]);

  return (
    <>
      {moviesId && (
        <>
          <div
          //   className={styles.left}
          >
            <h2>
              {moviesId.title} ({moviesId.release_date.slice(0, 4)})
            </h2>
            <p>
              {Math.round((moviesId.vote_average + Number.EPSILON) * 100) / 100}
            </p>

            {moviesId.poster_path === null ? (
              <img
                // className={styles.listItemImage}
                src={imgNot}
                alt={moviesId.title}
              />
            ) : (
              <img
                // className={styles.listItemImage}
                src={`https://image.tmdb.org/t/p/w400${moviesId.poster_path}`}
                alt={moviesId.title}
              />
            )}
          </div>

          <div
          //   className={styles.right}
          >
            <h3>Overview:</h3>
            <p>{moviesId.overview}</p>
            <h3>Genres:</h3>
            <ul
            //   className={styles.genres}
            >
              {moviesId.genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>

            <div className={css.links}>
              Additional information
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: ' #82d81f',
                      }
                    : { backgroundColor: '#fefcfc' }
                }
                to={`/movies/${id}/reviews`}
                className={css.link}
                state={location.state}
              >
                Reviews
              </NavLink>
              <NavLink
                style={({ isActive }) =>
                  isActive
                    ? {
                        backgroundColor: ' #82d81f',
                      }
                    : { backgroundColor: '#f8f6f6' }
                }
                to={`/movies/${id}/cast`}
                className={css.link}
                state={location.state}
              >
                Cast
              </NavLink>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsList;
