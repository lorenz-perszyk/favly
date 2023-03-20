import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface GeneralState {
  showMenu: boolean;
  toggleMenu: () => void;
}

const useGeneralStore = create<GeneralState>()(
  devtools((set) => ({
    showMenu: false,
    toggleMenu: () => set((state) => ({ showMenu: !state.showMenu })),
  }))
);

export default useGeneralStore;
