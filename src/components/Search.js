function Search({ search, setSearch }) {
  return (
    <input
      className="search"
      type="text"
      placeholder="Type to search..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}

export default Search;
