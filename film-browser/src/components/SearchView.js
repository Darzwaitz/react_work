import Hero from "./Hero";
const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;

  return (
    <main>
      <Hero text={title} />
    </main>
  );
};

export default SearchView;
