import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import languageReducer from "./language";
import searchInputReducer from "./searchInput";
import searchNewsReducer from "./searchNews";
import trendingNewsReducer from "./trendingNews";

export const store = configureStore({
  reducer: {
    searchInput: searchInputReducer,
    searchNews: searchNewsReducer,
    trendingNews: trendingNewsReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => RootDispatch = useDispatch;

export * from "./searchInput";
export * from "./searchNews";
export * from "./trendingNews";
export * from "./language";

