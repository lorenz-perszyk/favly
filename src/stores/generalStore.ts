import { create } from "zustand";

interface GeneralState {
  showMenu: boolean;
  toggleMenu: () => void;
}

const useGeneralStore = create<GeneralState>()((set) => ({
  showMenu: false,
  toggleMenu: () => set((state) => ({ showMenu: !state.showMenu })),
}));

export default useGeneralStore;
