import Image from 'next/image';
import Link from 'next/link';

function Header() {
  return (
    <nav className='flex flex-row'>
      <div className='flex flex-wrap items-center justify-left'>
        <Image src='/DisneyPlusLogo.png' width={100} height={67} />
      </div>
      <div>
        <ul className='flex flex-wrap items-center justify-left mb-6 text-white'>
          <li>
            <Link className='mr-4 hover:underline md:mr-6 p-4' href='/index'>
              Home
            </Link>
          </li>
          <li>
            <Link className='mr-4 hover:underline md:mr-6 p-4' href=''>
              Search
            </Link>
          </li>
          <li>
            <Link className='mr-4 hover:underline md:mr-6 p-4' href=''>
              Watchlist
            </Link>
          </li>
          <li>
            <Link className='mr-4 hover:underline md:mr-6 p-4' href=''>
              Originals
            </Link>
          </li>
          <li>
            <Link className='mr-4 hover:underline md:mr-6 p-4' href=''>
              Movies
            </Link>
          </li>
          <li>
            <Link className='mr-4 hover:underline md:mr-6 p-4' href=''>
              Series
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
