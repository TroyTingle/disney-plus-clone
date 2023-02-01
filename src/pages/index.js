import Header from '@/components/Header';
import HomeMain from '@/components/Home';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <head>
        <title>Disney+ Clone</title>
      </head>
      <body>
        <div className=''>
          {/* Header/Nav Bar */}
          <Header />
          {/* Main Content */}
          <HomeMain />
        </div>
      </body>
    </>
  );
}
