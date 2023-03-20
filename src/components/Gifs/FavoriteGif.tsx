// I M P O R T S
import React, { FC } from "react";
import Gif from "./Gif";
import useFavoriteStore from "../../stores/favoritesStore";
import RemoveIcon from "../../assets/media/favly_remove.svg";

// C O M P O N E N T
const FavoriteGif: FC = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);
  return (
    <>
      {favorites.map((gif) => (
        <div className="gif relative grid-item mb-4" key={gif.id}>
          <Gif gif={gif} />
          <button
            className="absolute top-2 right-2 h-8 w-8 transition-transform duration-200 hover:scale-[1.15] active:scale-100"
            onClick={() => removeFromFavorites(gif.id)}
          >
            <img src={RemoveIcon} alt="Remove" />
          </button>
        </div>
      ))}
    </>
  );
};

export default FavoriteGif;