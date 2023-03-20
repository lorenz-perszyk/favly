// I M P O R T S
import React, { FC, useEffect } from "react";
import UpButton from "../Buttons/UpButton";
import useSearchStore from "../../stores/searchStore";
import ImageGrid from "../Grid/ImageGrid";
import MasonryGrid from "../Grid/MasonryGrid";

// C O M P O N E N T
const TrendingResults: FC = () => {
  const results = useSearchStore((state) => state.searchResults);
  const clearResults = useSearchStore((state) => state.clearResults);
  const trendingSearch = useSearchStore((state) => state.trendingSearch);
  const hasMore = useSearchStore((state) => state.hasMore);

  useEffect(() => {
    clearResults();
    trendingSearch();
  }, []);

  return (
    <>
      <h1 className="mb-8 font-[600] uppercase">Trending</h1>
      <ImageGrid arrayName="general" />
      {results.length && hasMore ? (
        <div className="flex flex-row gap-2 mt-4">
          <UpButton />
          <button className="button-filled" onClick={trendingSearch}>
            More
          </button>
        </div>
      ) : null}
      {results.length && hasMore ? (
        <div className="flex flex-row gap-2 mt-4">
          <UpButton />
          <button className="button-filled" onClick={trendingSearch}>
            More
          </button>
        </div>
      ) : null}
    </>
  );
};

export default TrendingResults;