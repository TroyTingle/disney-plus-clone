import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Login() {
  return (
    <>
      <Head>
        <title>Login | Disney+ Clone</title>
      </Head>
      <main className='flex flex-row justify-center p-2'>
        <button className='bg-blue-600 hover:bg-blue-800 text-white font-semibold p-2'>
          Login
        </button>
        <button className='bg-blue-600 hover:bg-blue-800 text-white font-semibold p-2'>
          Sign In
        </button>
        <Link href='/Home' className='text-3xl row-start-2 text-white'>
          Home
        </Link>
      </main>
    </>
  );
}
