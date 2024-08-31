import { persist } from "zustand/middleware";
import { createWithEqualityFn } from "zustand/traditional";

type NavbarState = {
  title: string;
  setTitle: (title: string) => void;
};

export const useNavbarStore = createWithEqualityFn(
  persist<NavbarState>(
    (set) => ({
      title: "Home",
      setTitle: (title) => set({ title }),
    }),
    {
      name: "navbar-storage",
    }
  )
);
