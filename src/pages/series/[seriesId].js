import { useRouter } from 'next/router';

const TVShow = () => {
  const router = useRouter();
  const { name } = router.query;

  return (
    <>
      <Head>
        <title>Watch ${name} | Disney+ Clone</title>
      </Head>
      <main className=''>
        <Header />
        <SearchComp />
      </main>
    </>
  );
};
export default TVShow;
