import React, { FC } from "react";
import { Masonry } from "@mui/lab";
import useSearchStore from "../../stores/searchStore";
import Gif from "../Gifs/Gif";
import LottieStar from "../Gifs/LottieStar";

const SearchResultsGrid: FC = () => {
  const searchResults = useSearchStore((state) => state.searchResults);

  return (
    <Masonry columns={3} spacing={2}>
      {searchResults.map((gif, i) => (
        <div className="relative" key={i}>
          <Gif gif={gif} />
          <LottieStar gif={gif} />
        </div>
      ))}
    </Masonry>
  );
};

export default SearchResultsGrid;
