const URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.MOVIE_DB_KEY;

const apiFetch = async (endpoint) => {
  const response = await fetch(`${URL}${endpoint}`);
  const json = await response.json();
  return json;
};

export const getMovieList = async () => {
  return [
    {
      category: 'originals',
      title: 'Originals',
      items: await apiFetch(
        `/discover/tv?with_network=213&language=en-GB&api_key=${API_KEY}`
      ),
    },
    {
      category: 'trending',
      title: 'Trending',
      items: await apiFetch(
        `/trending/all/week?language=en-GB&api_key=${API_KEY}`
      ),
    },
    {
      category: 'top_rated',
      title: 'Top rated',
      items: await apiFetch(
        `/movie/top_rated?language=en-GB&api_key=${API_KEY}`
      ),
    },
    {
      category: 'horror',
      title: 'Horror',
      items: await apiFetch(
        `/discover/movie?with_genres=27&language=en-GB&api_key=${API_KEY}`
      ),
    },
    {
      category: 'comedy',
      title: 'Comedy',
      items: await apiFetch(
        `/discover/movie?with_genres=35&language=en-GB&api_key=${API_KEY}`
      ),
    },
    {
      category: 'action',
      title: 'Action',
      items: await apiFetch(
        `/discover/movie?with_genres=28&language=en-GB&api_key=${API_KEY}`
      ),
    },
    {
      category: 'documentary',
      title: 'Documentary',
      items: await apiFetch(
        `/discover/movie?with_genres=99&language=en-GB&api_key=${API_KEY}`
      ),
    },
  ];
};
