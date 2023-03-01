import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { getAllShows, getSeries } from '../api/moviedbapi';

export async function getStaticPaths() {
  const response = await getAllShows('tv');
  return {
    paths: response.map((series) => {
      const seriesId = series.id;
      return {
        params: {
          seriesId: seriesId.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.seriesId;
  const results = await getSeries(id);
  console.log(results);
  return {
    props: { series: results },
  };
}

export default function Series({ series }) {
  return (
    <>
      <Head>
        <title>Watch ${series.name} | Disney+ Clone</title>
      </Head>
      <main className=''>
        <Header />
        <Image
          src={`https://image.tmdb.org/t/p/original/${series.poster_path}`}
          width={100}
          height={100}
        />
        <h1>{series.name}</h1>
      </main>
    </>
  );
}
