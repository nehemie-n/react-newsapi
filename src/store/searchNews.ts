import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Article, RecentNews } from "../api";
import { Api } from "../api/api";

const initialState = {
  loading: true,
  news: [] as Article[],
  totalResults: 0,
  err: undefined as any as string,
};

export const searchNews = createAsyncThunk(
  "searchNews/searchNews",
  async (q: string, thunkAPI) => {
    return Api.get<RecentNews>(`/v2/everything?q=${q}&sortBy=publishedAt`)
      .then((resp) => resp.data)
      .catch((err) => thunkAPI.rejectWithValue(err as AxiosError));
  }
);

export const searchNewsSlice = createSlice({
  name: "searchNewsSlice",
  initialState,
  reducers: {
    /**
     *
     * @param state
     */
    resetSearchNews(state) {
      state.news = [];
      state.err = "";
      state.loading = false;
      state.totalResults = 0;
    },
  },
  extraReducers: (builder) => {
    /**
     * The fullfilled case
     */
    builder.addCase(searchNews.fulfilled, (state, action) => {
      state.news = action.payload.articles;
      state.totalResults = action.payload.totalResults;
      state.loading = false;
    });
    /**
     * on error
     */
    builder.addCase(searchNews.rejected, (state, action) => {
      state.err = (action.payload as AxiosError).message;
      state.loading = false;
    });
  },
});

export const { resetSearchNews } = searchNewsSlice.actions;

export default searchNewsSlice.reducer;
