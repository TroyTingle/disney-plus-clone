import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { getAllShows } from '.././api/moviedbapi';

export default function Movies() {
  const [shows, setShows] = useState([]);
  const [dropdown, setDropdown] = useState('');
  //Calls API to get TV shows or films based on what is selected in the dropdown
  async function getShows(category) {
    const response = await getAllShows('tv', category);
    setShows(response);
  }

  useEffect(() => {
    var select = document.getElementById('Category');
    var option = select.options[select.selectedIndex];
    getShows(option.id);
  });
  [dropdown];

  return (
    <>
      <Head>
        <title>TV Series | Disney+ Clone</title>
      </Head>
      <main>
        <Header />
        <div className='flex pt-4 pb-2 text-white'>
          <h3 className='p-2 text-lg'>Explore</h3>
          <select
            id='Category'
            className='rounded-lg bg-gray-600 hover:bg-gray-800'
            onChange={(e) => setDropdown(e.target.value)}
          >
            <option id=''>Featured</option>
            <option id='10759'>Action/Adventure</option>
            <option id='16'>Animation</option>
            <option id='35'>Comedy</option>
            <option id='99'>Documentary</option>
            <option id='18'>Drama</option>
            <option id='10765'>Science Fiction</option>
            <option id='10762'>Kids</option>
          </select>
        </div>

        <div className='flex flex-col pl-8 pr-8 3xl:pl-32 3xl:pr-32'>
          <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {shows.map((show) => {
              return (
                <Link href={`/series/${show.id}`}>
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
                </Link>
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
