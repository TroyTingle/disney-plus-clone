import Image from 'next/image';

export const SearchResultItem = ({ items, input }) => {
  const filteredItems = items.results.filter((item) => {
    return item.name.includes(input);
  });

  return (
    <>
      {filteredItems.map((item) => {
        return (
          <li key={item.id}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
              width={258}
              height={145}
              alt={`Film or TV Series image: ${item.name}`}
            />
          </li>
        );
      })}
    </>
  );
};
