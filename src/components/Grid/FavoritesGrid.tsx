import React, { FC } from "react";
import { Masonry } from "@mui/lab";
import useFavoriteStore from "../../stores/favoritesStore";
import Gif from "../Gifs/Gif";
import RemoveIcon from "../../assets/media/favly_remove.svg";

const FavoritesGrid: FC = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);

  return (
    <Masonry columns={3} spacing={2}>
      {favorites.map((gif, i) => (
        <div className="relative" key={i}>
          <Gif gif={gif} />
          <button
            className="absolute top-2 right-2 h-8 w-8 transition-transform duration-200 hover:scale-[1.15] active:scale-100"
            onClick={() => removeFromFavorites(gif.id)}
          >
            <img src={RemoveIcon} alt="Remove" />
          </button>
        </div>
      ))}
    </Masonry>
  );
};

export default FavoritesGrid;
