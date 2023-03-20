// @ts-nocheck
// I M P O R T S
import React, { FC, useLayoutEffect, useState, useRef } from "react";
import Masonry from "masonry-layout";
import imagesLoaded from "imagesloaded";
import GeneralGif from "../Gifs/GeneralGif";
import FavoriteGif from "../Gifs/FavoriteGif";
import useFavoriteStore from "../../stores/favoritesStore";
import useSearchStore from "../../stores/searchStore";

// C O M P O N E N T

interface props {
  arrayName: string;
}

const MasonryGrid: FC<props> = ({ arrayName }) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);
  const searchResults = useSearchStore((state) => state.searchResults);

  let grid = document.querySelector(".grid");
  // let msnry = new Masonry( grid, {
  //  itemSelector: ".grid-item",
  // columnWidth: ".grid-sizer",
  // gutter: '.gutter-sizer',
  // percentPosition: true,

  // });
  let msnry;

  // imagesLoaded("#container", { background: '.gif-image' }, function () {
  //   console.log("#container background image loaded");
  // });

  useLayoutEffect(() => {
    imagesLoaded(grid, function () {
      console.log("images loaded");
      msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        columnWidth: ".grid-sizer",
        gutter: ".gutter-sizer",
        percentPosition: true,
      });
    });
  }, [searchResults]);

  return (
    <div className="grid" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": 200 }'>
      <div className="grid-sizer w-full sm:w-[49%] lg:w-[32%]"></div>
      <div className="gutter-sizer sm:w-[2%] lg:w-[2%]"></div>
      {arrayName === "general" ? <GeneralGif /> : <FavoriteGif />}
    </div>
  );
};

export default MasonryGrid;
