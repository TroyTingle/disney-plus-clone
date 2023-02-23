import { SearchResultItem } from '@/components/SearchResultItem';
import { getFilmList } from '@/pages/api/moviedbapi';
import { useEffect, useState } from 'react';

export const SearchComp = () => {
  const [input, setInput] = useState('');
  const [searchList, setSearchList] = useState([]);

  async function getShows() {
    const response = await getFilmList();
    setSearchList(response);
  }
  useEffect(() => {
    getShows();
  }, []);

  return (
    <>
      {/* Search Bar */}
      <input
        type='text'
        id='Search'
        placeholder='Search by title, character, or genre'
        className='min-w-full h-[8vh] bg-gradient-to-r from-gray-700 to bg-zinc-700 text-4xl font-semibold'
        onChange={({ target }) => setInput(target.value)}
      />
      <div>
        <ul>
          {searchList.map((show, index) => {
            return (
              <SearchResultItem key={index} items={show.items} input={input} />
            );
          })}
        </ul>
      </div>
    </>
  );
};
