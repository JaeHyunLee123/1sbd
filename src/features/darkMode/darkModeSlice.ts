import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DarkModeState {
  isDark: boolean;
}

const getInitialDarkState = () => {
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("theme");

    if (saved) {
      const root = window.document.documentElement;
      if (saved === "dark") {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }

      return saved === "dark";
    }
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

const initialState: DarkModeState = {
  isDark: getInitialDarkState(),
};

export const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    changeDarkMode: (state, actions: PayloadAction<boolean>) => {
      state.isDark = actions.payload;

      const root = window.document.documentElement;
      if (state.isDark) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    },
  },
});

export const { changeDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
