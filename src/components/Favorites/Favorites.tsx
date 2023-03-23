// I M P O R T S
import React, { FC} from "react";
import useFavoriteStore from "../../stores/favoritesStore";
import FavoritesGrid from "../Grid/FavoritesGrid";

// C O M P O N E N T
const Favorites: FC = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFromFavorites = useFavoriteStore((state) => state.removeFromFavorites);

  return (
    <div>
      <h1 className="mb-8 font-[600] uppercase">Favorites</h1>
      {!favorites.length && <h3>Looks kind of empty here ...</h3>}
      <FavoritesGrid />
    </div>
  );
};

export default Favorites;
