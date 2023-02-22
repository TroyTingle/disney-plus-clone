import Header from '@/components/Header';
import { SearchResultItem } from '@/components/SearchResultItem';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { getShowList } from './api/moviedbapi';

export default function Search() {
  const [input, setInput] = useState('');
  const [searchList, setSearchList] = useState([]);

  async function getShows() {
    const response = await getShowList();
    setSearchList(response);
    console.log(response);
  }
  useEffect(() => {
    getShows();
  }, []);
  return (
    <>
      <Head>
        <title>Search Movies and Shows | Disney+ Clone</title>
      </Head>
      <main className=''>
        <Header />
        {/* Search Bar */}

        <input
          type='text'
          id='Search'
          placeholder='Search by title, character, or genre'
          className='min-w-full h-[8vh] bg-gradient-to-r from-gray-700 to bg-zinc-700 text-4xl font-semibold'
          onChange={({ target }) => setInput(target.value)}
        />

        <ul>
          {searchList.map((show, index) => {
            return (
              <SearchResultItem key={index} items={show.items} input={input} />
            );
          })}
        </ul>
      </main>
    </>
  );
}
