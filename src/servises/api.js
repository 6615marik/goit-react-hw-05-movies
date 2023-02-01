import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'api_key=d2aad9d08af0864f29f140d50d0d9bda';

// Trending movies -> HomePage
const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}trending/movie/day?${API_KEY}`);
  // console.log(res.data.results);
  const trendingMovies = res.data.results.map(
    ({ id, title, poster_path, vote_average }) => {
      return { id, title, poster_path, vote_average };
    }
  );
  return trendingMovies;
};

// Search by id -> MovieDetailsPage
const getById = async id => {
  let respById = await axios.get(`${BASE_URL}movie/${id}?${API_KEY}`);
  return respById.data;
};

//Movie REVIEW by id -> Review
const getReviews = async id => {
  const resReviews = await axios.get(
    `${BASE_URL}movie/${id}/reviews?${API_KEY}`
  );
  const reviews = resReviews.data.results.map(({ author, content, id }) => {
    return { author, content, id };
  });
  return reviews;
};

// CAST review by id -> Cast
const getCasts = async id => {
  const resCasts = await axios.get(`${BASE_URL}movie/${id}/credits?${API_KEY}`);
  return resCasts.data;
};

// Movie by name/query -> MoviesPage
const getByQuery = async query => {
  const resByQuery = await axios.get(
    `${BASE_URL}search/movie?${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );
  return resByQuery.data.results;
};

export { getMovies, getById, getReviews, getCasts, getByQuery };
