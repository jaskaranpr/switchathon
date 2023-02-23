import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface ScrollHandlerType {
  scrollY: number;
  setScrollY: (value: number) => void;
}

export const useScrollHandler = create<ScrollHandlerType>()(
  devtools(
    persist(
      (set) => ({
        scrollY: 0,
        setScrollY: (scrollY: number) =>
          set((prevState) => ({ ...prevState, scrollY })),
      }),
      {
        name: "bear-storage",
      }
    )
  )
);
