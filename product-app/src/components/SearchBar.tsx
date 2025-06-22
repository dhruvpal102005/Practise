function SearchBar({ searchTerm, setSearchTerm }: { searchTerm: string; setSearchTerm: (val: string) => void }) {
  return (
    <input
      type="text"
      placeholder="Search products..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
  );
}

export default SearchBar;
