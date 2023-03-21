// I M P O R T
import React, { FC, useEffect } from "react";
import useSearchStore from "../../stores/searchStore";
import RandomGif from "../Gifs/RandomGif";

// C O M P O N E N T
const RandomResults: FC = () => {
  const clearResults = useSearchStore((state) => state.clearResults);
  const randomSearch = useSearchStore((state) => state.randomSearch);

  useEffect(() => {
    clearResults();
    randomSearch();
  }, []);

  return (
    <>
      <h1 className="mb-2 font-[600] uppercase">Random</h1>
      <button className="button-filled mb-8" onClick={randomSearch}>
        Roll the Dice{" "}
      </button>
      <div className="flex justify-center">
        <RandomGif />
      </div>
    </>
  );
};

export default RandomResults;
