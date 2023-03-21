import { create } from "zustand";

interface SearchState {
  key: string;
  searchResults: Array<any>;
  noResults: boolean;
  hasMore: boolean;
  fetchAmount: number;
  offset: number;
  addResults: (gif: any) => void;
  clearResults: () => void;
  customSearch: (searchTerm: string) => void;
  trendingSearch: () => void;
  randomSearch: () => void;
}

const useSearchStore = create<SearchState>()((set, get) => ({
  key: "vf7nDm11F3X2Pe63jIGjWWPiFCFCZXM8",
  searchResults: [],
  noResults: false,
  hasMore: true,
  fetchAmount: 15,
  offset: 0,

  addResults: (results) =>
    set((state) => ({ searchResults: [...state.searchResults, ...results] })),

  clearResults: () =>
    set((state) => ({ searchResults: (state.searchResults = []), offset: 0, hasMore: true })),

  customSearch: async (searchTerm) => {
    set((state) => ({ noResults: false }));
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${get().key}&limit=${
          get().fetchAmount
        }&offset=${get().offset + 1}`
      );
      const results = await response.json();

      // Check if any results were found
      if (!results.pagination.total_count) {
        set((state) => ({ noResults: true }));
      } else {
        get().addResults(results.data);
        set((state) => ({ offset: state.offset + get().fetchAmount }));
      }

      // Check if all results have been fetched
      if (get().offset >= results.pagination.total_count) {
        set((state) => ({ hasMore: false }));
      }
    } catch (error) {
      console.warn(error);
    }
  },

  trendingSearch: async () => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/trending?api_key=${get().key}&limit=${
          get().fetchAmount
        }&offset=${get().offset + 1}`
      );
      const results = await response.json();
      get().addResults(results.data);
      set((state) => ({ offset: state.offset + get().fetchAmount }));

      // Check if all results have been fetched
      if (get().offset >= results.pagination.total_count) {
        set((state) => ({ hasMore: false }));
      }
    } catch (error) {
      console.warn(error);
    }
  },

  randomSearch: async () => {
    try {
      const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${get().key}`);
      const result = await response.json();
      set((state) => ({ searchResults: [result.data] }));
    } catch (error) {
      console.warn(error);
    }
  },
}));

export default useSearchStore;

// get().clearResults();
