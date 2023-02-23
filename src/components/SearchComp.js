import { getAllFilmList } from '@/pages/api/moviedbapi';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const SearchComp = () => {
  const [shows, setShows] = useState([]);
  const [search, setSearch] = useState('');

  async function getFilms() {
    const response = await getAllFilmList();
    const filteredResponse = response.results.filter((item) => {
      return item.title.toLocaleLowerCase().trim().includes(search);
    });

    setShows(filteredResponse);
    console.log(filteredResponse);
  }

  useEffect(() => {
    // Search API when user types in the search bar.
    getFilms();
  }, [search]);

  return (
    <>
      {/* Search Bar */}
      <input
        type='search'
        placeholder='Search by title, character, or genre'
        className='min-w-full h-[8vh] bg-gradient-to-r from-gray-700 to bg-zinc-700 text-4xl font-semibold'
        onChange={(e) => setSearch(e.target.value)}
      />

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
