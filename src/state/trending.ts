import axios from "axios";
import { Api } from "./api";
import { Article, RecentNews } from "./interface";
import trending from "./trending.json";

export const fetchTrending = (): Promise<Article[]> => {
  return Promise.resolve(trending as Article[]);
  const lang = "us";
  return Api.get<RecentNews>(`/v2/top-headlines?country=${lang}`).then(
    (resp) => {
      return resp.data.articles;
    }
  );
};

const categories = [
  "regional",
  "technology",
  "lifestyle",
  "business",
  "general",
  "programming",
  "science",
  "entertainment",
  "world",
  "sports",
  "finance",
  "academia",
  "politics",
  "health",
  "opinion",
  "food",
  "game",
];
