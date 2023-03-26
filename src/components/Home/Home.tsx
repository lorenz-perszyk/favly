// I M P O R T S
import React, { FC } from "react";
import SearchOption from "./SearchOption";

// C O M P O N E N T
const Home: FC = () => {
  return (
    <div className="flex flex-col gap-20 pt-28 md:flex-row md:gap-8 lg:flex-col lg:gap-20">
      <div className="max-w-[700px] flex-1">
        <h1 className="mb-6 text-4xl">
          Welcome to <strong>Favly!</strong>
        </h1>
        <h2>
          Looking for just the right gif to send to your parents, friends or coworkers? Choose one
          of our options.
        </h2>
      </div>
      <div className="flex flex-col flex-1 gap-12 lg:flex-row">
        <SearchOption />
      </div>
    </div>
  );
};

export default Home;
