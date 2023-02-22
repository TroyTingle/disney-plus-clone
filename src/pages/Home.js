import Header from '@/components/Header';
import HomeCarousel from '@/components/HomeCarousel';
import StudioNav from '@/components/StudioNav';
import Head from 'next/head';
export default function Home() {
  return (
    <>
      <Head>
        <title>Disney+ Clone</title>
      </Head>
      <main className=''>
        <Header />
        <HomeCarousel />
        <StudioNav />
      </main>
    </>
  );
}
