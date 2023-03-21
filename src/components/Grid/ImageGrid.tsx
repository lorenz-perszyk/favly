// I M P O R T S
import React, { FC } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import useFavoriteStore from "../../stores/favoritesStore";
import useSearchStore from "../../stores/searchStore";
import Gif from "../Gifs/Gif";
import LottieStar from "../Gifs/LottieStar";
import RemoveIcon from "../../assets/media/favly_remove.svg";

// C O M P O N E N T
interface ImageGridProps {
  arrayName: string;
}

const ImageGrid: FC<ImageGridProps> = ({ arrayName }) => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);
  const searchResults = useSearchStore((state) => state.searchResults);

  return (
      <ResponsiveMasonry columnsCountBreakPoints={{ 320: 1, 600: 2, 1024: 3, 1440: 4 }}>
        <Masonry gutter="16px">
          {arrayName === "general"
            ? searchResults.map((gif, i) => (
                <div className="gif relative w-full block" key={i}>
                  <Gif gif={gif} />
                  <LottieStar gif={gif} />
                </div>
              ))
            : favorites.map((gif) => (
                <div className="gif relative w-full block" key={gif.id}>
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
      </ResponsiveMasonry>
  );
};

export default ImageGrid;
