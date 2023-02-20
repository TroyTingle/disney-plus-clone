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
      <body>
        <p>Login</p>
        <Link href='/Home'>Home</Link>
      </body>
    </>
  );
}
