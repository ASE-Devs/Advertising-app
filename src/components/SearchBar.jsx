import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="Search books..."
      value={query}
      onChange={handleSearch}
      className="p-2 border border-gray-300 rounded-md w-full"
    />
  );
};

export default SearchBar;
