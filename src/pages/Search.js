import Header from '@/components/Header';
import { SearchComp } from '@/components/SearchComp';
import Head from 'next/head';

export default function Search() {
  return (
    <>
      <Head>
        <title>Search Movies and Shows | Disney+ Clone</title>
      </Head>
      <main className=''>
        <Header />
        <SearchComp />
      </main>
    </>
  );
}
