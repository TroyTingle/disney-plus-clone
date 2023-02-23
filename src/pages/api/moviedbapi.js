const URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.NEXT_PUBLIC_MOVIE_DB_KEY;

const apiFetch = async (endpoint) => {
  const response = await fetch(`${URL}${endpoint}`);
  const json = await response.json();
  return json;
};

export const getFilmList = async () => {
  return [
    {
      items: await apiFetch(
        `/discover/movie?with_network=337&language=en-GB&api_key=${API_KEY}`
      ),
    },
  ];
};
