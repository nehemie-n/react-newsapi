import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { Article, RecentNews } from "../api";
import { Api } from "../api/api";
import trending from "../api/trending.json";

const initialState = {
  news: [] as Article[],
  loading: true,
};
interface TrendingNews {
  articles: Article[];
  status: String;
  totalResults: number;
}

// First, create the thunk
export const fetchTrending = createAsyncThunk(
  "trendingNews/fetchTrending",
  async (data, thunkAPI) => {
    if (false) {
      return Promise.resolve((trending as TrendingNews).articles);
    } else {
      const lang = "us";
      return Api.get<RecentNews>(`/v2/top-headlines?country=${lang}`)
        .then((resp) => resp.data.articles)
        .catch((err) => thunkAPI.rejectWithValue(err as AxiosError));
    }
  }
);
export const trendingNewsSlice = createSlice({
  name: "trendingNewsSlice",
  initialState,
  reducers: {
    /**
     *
     * @param state
     */
    resetTrending(state) {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchTrending.fulfilled, (state, action) => {
      // Add user to the state array
      state.news = action.payload;
      state.loading = false;
    });
  },
});

export const { resetTrending } = trendingNewsSlice.actions;

export default trendingNewsSlice.reducer;
