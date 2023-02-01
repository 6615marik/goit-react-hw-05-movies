import { Suspense, useState, useEffect } from 'react';
import MagnifyingGlas from '../components/MagnifyingGlass';
import { getByQuery } from '../servises/api';
import { useSearchParams } from 'react-router-dom';
import MoviesPageList from 'components/MoviesPageList';
const MoviesPages = () => {
  const [setMovie] = useState(null);
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name') ?? '';

  useEffect(() => {
    if (!query) return;
    getByQuery(query)
      .then(setMovies && `kvmkv`)
      .catch(function (error) {
        console.log('Error: ' + error);
      });
  }, [query]);

  const handleSubmit = e => {
    e.preventDefault();
    setMovie(query);
  };

  const onChange = e => setSearchParams({ name: e.target.value });
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={onChange}
          placeholder="Search"
          autoComplete="off"
          autoFocus
        />
      </form>
      <ul>
        <Suspense fallback={<MagnifyingGlas />}>
          <MoviesPageList query={query} movies={movies} />
        </Suspense>
      </ul>
    </>
  );
};

export default MoviesPages;
