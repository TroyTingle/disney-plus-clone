const URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

export const getAllFilmList = async () => {
  const response = await fetch(
    `${URL}/discover/movie?with_network=337&language=en-GB&api_key=${API_KEY}`
  );
  const json = await response.json();
  return json;
};

const pageParams = Array.from({ length: 5 }, (_, index) => ({
  api_key: API_KEY,
  page: index + 1,
}));

export const getAllFilms = async () => {
  const fetchPromises = pageParams.map((params) => {
    const url = `${URL}/discover/movie?with_watch_providers=337&watch_region=GB&language=en-GB&${new URLSearchParams(
      params
    )}`;
    return fetch(url).then((response) => response.json());
  });
  const data = await Promise.all(fetchPromises);
  return data.flatMap((page) => page.results);
};

export const getAllShows = async () => {
  const fetchPromises = pageParams.map((params) => {
    const url = `${URL}/discover/tv?with_watch_providers=337&watch_region=GB&language=en-GB&${new URLSearchParams(
      params
    )}`;
    console.log(url);
    return fetch(url).then((response) => response.json());
  });
  const data = await Promise.all(fetchPromises);
  return data.flatMap((page) => page.results);
};

export const getAllShowsAndFilms = async () => {
  const fetchPromisesFilms = pageParams.map((params) => {
    const url = `${URL}/discover/movie?with_watch_providers=337&watch_region=GB&sort_by=popularity.asc&language=en-GB&${new URLSearchParams(
      params
    )}`;
    return fetch(url).then((response) => response.json());
  });

  const fetchPromisesShows = pageParams.map((params) => {
    const url = `${URL}/discover/tv?with_watch_providers=337&watch_region=GB&sort_by=popularity.asc&language=en-GB&${new URLSearchParams(
      params
    )}`;
    return fetch(url).then((response) => response.json());
  });
  const films = await Promise.all(fetchPromisesFilms);
  const shows = await Promise.all(fetchPromisesShows);
  const showsAndFilms = films
    .flatMap((page) => page.results)
    .concat(shows.flatMap((page) => page.results));

  return showsAndFilms;
};
