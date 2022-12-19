import { createSlice } from "@reduxjs/toolkit";
import { createContext } from "react";

// how it is called in the localstorage
const LANGUAGE_NAME = "lang";

/**
 * Languages
 * We can just add tother supported ones by the API
 */
export const languages: Record<string, string> = {
  en: "English",
  fr: "French",
  ch: "Chinese",
  us: "US",
};

/**
 * Prepares the language dropdown
 */
const defaultLang = "en";
const localLanguage = localStorage.getItem(LANGUAGE_NAME);

export const languageSlice = createSlice({
  name: "languageSlice",
  initialState: {
    lang: localLanguage ?? defaultLang,
  },
  reducers: {
    /**
     * Sets the language
     * @param state
     * @param action
     */
    setLanguage(state, action: { payload: string }) {
      state.lang = action.payload;
      localStorage.setItem(LANGUAGE_NAME, action.payload);
    },

    /**
     * Called when the app is initiating and checks the
     * Localstorage for language e.t.c
     * @param state
     */
    loadLanguage(state) {},
  },
});

export const { loadLanguage, setLanguage } = languageSlice.actions;

export default languageSlice.reducer;
