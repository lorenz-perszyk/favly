// I M P O R T S
import { link } from "fs";
import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import useSearchStore from "../../stores/searchStore";

// C O M P O N E N T
const SearchOption: FC = () => {
  const trendingSearch = useSearchStore((state) => state.trendingSearch);
  const randomSearch = useSearchStore((state) => state.randomSearch);

  const options: {
    title: string;
    text: string;
    buttonText: string;
    link: string;
    action?: () => void;
  }[] = [
    {
      title: "Custom Search",
      text: "Do you need a gif for a specific occasion? then this option is for you.",
      buttonText: "Search",
      link: "/search",
    },
    {
      title: "What's Trending",
      text: "Don’t want to feel left out when you’re hanging out with your friends? Check out what’s trending right now.",
      buttonText: "Trending",
      link: "/trending",
    },
    {
      title: "Feeling Lucky",
      text: "The adventurous type? Then give our random option a try and rediscover old favorites or find new ones.",
      buttonText: "Random GIF",
      link: "/random",
    },
  ];

  return (
    <>
      {options.map((option) => (
        <div
          key={option.title}
          className="border-2 border-favly-main bg-favly-main bg-opacity-10 rounded flex-1"
        >
          <div className="h-8 flex flex-col justify-center align px-4 bg-favly-main text-favly-light uppercase">
            <h4 className="leading-[1]">{option.title}</h4>
          </div>
          <div className="flex flex-col justify-between p-4 h-[calc(100%-32px)]">
            <p className="pb-12">{option.text}</p>
            <NavLink to={option.link}>
              <button className="button-outline">{option.buttonText}</button>
            </NavLink>
          </div>
        </div>
      ))}
    </>
  );
};

export default SearchOption;
