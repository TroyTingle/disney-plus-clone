import Header from '@/components/Header';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <head>
        <title>Disney+ Clone</title>
      </head>
      <div className='bg-blue-500'>
        {/* Header/Nav Bar */}
        <Header />
        {/*Featured bar */}

        {/* Categories */}

        {/* Main Shows*/}
      </div>
    </>
  );
}
