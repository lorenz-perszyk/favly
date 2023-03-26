// I M P O R T S
import React, { FC, useState, useEffect } from "react";
import UpButton from "../Buttons/UpButton";
import useSearchStore from "../../stores/searchStore";
import SearchResultsGrid from "../Grid/SearchResultsGrid";

// C O M P O N E N T
const SearchResults: FC = () => {
  const clearResults = useSearchStore((state) => state.clearResults);
  const customSearch = useSearchStore((state) => state.customSearch);
  const searchResults = useSearchStore((state) => state.searchResults);
  const noResults = useSearchStore((state) => state.noResults);
  const hasMore = useSearchStore((state) => state.hasMore);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    clearResults();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    clearResults();
    customSearch(searchTerm);
  };

  return (
    <div className="pt-28">
      <form className="flex flex-col gap-4 mb-12 sm:flex-row" onSubmit={handleSubmit}>
        <input
          className="h-12 border border-favly-light border-b-favly-dark uppercase font-[600] text-2xl bg-favly-light focus:outline-none flex-grow"
          id="searchInput"
          type="text"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          placeholder="Search ..."
          required
          aria-required="true"
        />
        <button type="submit" className="button-filled sm:max-w-[240px]">
          Search
        </button>
      </form>
      <SearchResultsGrid />
      {noResults ? <h3>Sorry, We couldn't find anything. Please try again!</h3> : null}
      {searchResults.length > 0 && hasMore ? (
        <div className="flex flex-row gap-4 mt-4">
          <UpButton />
          <button className="button-filled" onClick={() => customSearch(searchTerm)}>
            More
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default SearchResults;
