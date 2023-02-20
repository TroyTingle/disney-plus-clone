import Image from 'next/image';
function StudioNav() {
  return (
    <div id='Studio Nav' className='flex flex-row gap-4 pb-7'>
      <div className='bg-gray-800 border-gray-700 border-4 rounded-2xl'>
        <Image src='/DisneyLogo.png' width={400} height={225} />
      </div>
      <div className='bg-gray-800 border-gray-700 border-4 rounded-2xl'>
        <Image src='/PixarLogo.png' width={400} height={225} />
      </div>
      <div className='bg-gray-800 border-gray-700 border-4 rounded-2xl'>
        <Image src='/MarvelLogo.png' width={400} height={225} />
      </div>
      <div className='bg-gray-800 border-gray-700 border-4 rounded-2xl'>
        <Image src='/StarWarsLogo.png' width={400} height={225} />
      </div>
      <div className='bg-gray-800 border-gray-700 border-4 rounded-2xl'>
        <Image src='/NatGeoLogo.png' width={400} height={225} />
      </div>
      <div className='bg-gray-800 border-gray-700 border-4 rounded-2xl'>
        <Image src='/StarLogo.png' width={400} height={225} />
      </div>
    </div>
  );
}

export default StudioNav;
