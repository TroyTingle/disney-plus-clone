const URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

const pageParams = Array.from({ length: 5 }, (_, index) => ({
  api_key: API_KEY,
  page: index + 1,
}));

export const getAllShows = async (type, genre) => {
  try {
    const fetchPromises = pageParams.map((params) => {
      const url = `${URL}/discover/${type}?with_watch_providers=337&watch_region=GB&with_genres=${genre}&language=en-GB&${new URLSearchParams(
        params
      )}`;
      console.log(url);
      return fetch(url).then((response) => response.json());
    });
    const data = await Promise.all(fetchPromises);
    return data.flatMap((page) => page.results);
  } catch (error) {
    console.error('An error occured fetching shows', error);
  }
};

export const getMovie = async (movie) => {
  try {
    const results = await fetch(
      `${URL}/movie/${movie}?api_key=${API_KEY}&language=en-GB`
    ).then((response) => response.json());
    return results;
  } catch (error) {
    console.error(`An error occured fetching movie: ${movie}`, error);
  }
};

export const getSeries = async (series) => {
  try {
    const results = await fetch(
      `${URL}/tv/${series}?api_key=${API_KEY}&language=en-GB`
    ).then((response) => response.json());
    return results;
  } catch (error) {
    console.error(`An error occured fetching series: ${series}`, error);
  }
};
