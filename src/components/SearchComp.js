import { getAllFilms, getAllShows } from '@/pages/api/moviedbapi';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const SearchComp = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');
  const [dropdown, setDropdown] = useState('');

  //Calls API to get films
  async function getFilms() {
    const response = await getAllFilms();
    const filteredResponse = response.filter((item) => {
      return item.title.toLocaleLowerCase().trim().includes(search);
    });
    setShows(filteredResponse);
  }
  //Calls API to get TV shows
  async function getTVShows() {
    const response = await getAllShows();
    const filteredResponse = response.filter((item) => {
      return item.name.toLocaleLowerCase().trim().includes(search);
    });
    setShows(filteredResponse);
  }

  useEffect(() => {
    // Search API when user types in the search bar.
    var selector = document.getElementById('Show or Film');
    var selectorValue = selector.options[selector.selectedIndex].value;
    if (selectorValue == 'Movies') {
      getFilms();
    } else if (selectorValue == 'TV Shows') {
      getTVShows();
    }
  }, [search, dropdown]);

  return (
    <>
      {/* Search Bar */}
      <input
        type='search'
        placeholder='Search by title, character, or genre'
        className='min-w-full h-[8vh] bg-gradient-to-r from-gray-700 to bg-zinc-700 text-4xl font-semibold'
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className='flex pt-4 pb-2 text-white'>
        <h3 className='p-2 text-lg'>Explore</h3>
        <select
          id='Show or Film'
          className='rounded-lg bg-gray-600 hover:bg-gray-800'
          onChange={(e) => setDropdown(e.target.value)}
        >
          <option value='Movies'>Movies</option>
          <option value='TV Shows'>TV Shows</option>
        </select>
      </div>

      <div className='flex flex-col pl-8 pr-8 3xl:pl-32 3xl:pr-32'>
        <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {shows.map((show) => {
            return (
              <li key={show.id} className='p-4'>
                <div className='w-[258] h-[145] rounded-md'>
                  <Image
                    src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                    alt={`Film or Series image: ${show.title}`}
                    width={500}
                    height={1000}
                    className='rounded-xl'
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
