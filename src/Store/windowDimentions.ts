import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface dimentions {
  width: number;
  height: number;
}

interface DimentionsType extends dimentions {
  setWindowDimentions: (value: dimentions) => void;
}

export const useWindowDimentions = create<DimentionsType>()(
  devtools(
    persist(
      (set) => ({
        width: window?.innerWidth ?? 0,
        height: window?.innerHeight ?? 0,
        setWindowDimentions: (value: dimentions) =>
          set((prevState) => ({ ...prevState, ...value })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
