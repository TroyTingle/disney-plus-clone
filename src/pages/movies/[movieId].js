import Header from '@/components/Header';
import Head from 'next/head';
import Image from 'next/image';
import { getAllShows, getMovie } from '../api/moviedbapi';

export async function getStaticPaths() {
  const response = await getAllShows('movie');
  return {
    paths: response.map((movie) => {
      const movieId = movie.id;
      return {
        params: {
          movieId: movieId.toString(),
        },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const id = params.movieId;
  const results = await getMovie(id);

  return {
    props: { movie: results },
  };
}

export default function Film({ movie }) {
  return (
    <>
      <Head>
        <title>Watch ${movie.title} | Disney+ Clone</title>
      </Head>
      <main className=''>
        <Header />
        <Image
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          width={100}
          height={100}
        />
        <h1>{movie.title}</h1>
      </main>
    </>
  );
}
