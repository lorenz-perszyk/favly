import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoritesState {
  favorites: Array<any>;
  addToFavorites: (gif: any) => void;
  removeFromFavorites: (id: number) => void;
}

const useFavoriteStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      addToFavorites: (gif) => set((state) => ({ favorites: [...state.favorites, gif] })),
      removeFromFavorites: (id) =>
        set((state) => ({ favorites: state.favorites.filter((favorite) => favorite.id !== id) })),
    }),
    {
      name: "favorites-storage",
    }
  )
);

export default useFavoriteStore;
