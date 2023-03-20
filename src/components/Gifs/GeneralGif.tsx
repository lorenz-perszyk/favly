// I M P O R T S
import React, { FC, useRef, useEffect } from "react";
import Gif from "./Gif";
import LottieStar from "./LottieStar";
import useSearchStore from "../../stores/searchStore";

// C O M P O N E N T
const GeneralGif: FC = () => {
  const searchResults = useSearchStore((state) => state.searchResults);

  return (
    <>
      {searchResults.map((gif, i) => (
        <div className="gif grid-item relative mb-4" key={i}>
          <Gif gif={gif} />
          <LottieStar gif={gif} />
        </div>
      ))}
    </>
  );
};

export default GeneralGif;
