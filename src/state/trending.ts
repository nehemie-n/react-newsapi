import axios from "axios";
import { Api } from "./api";
import { RecentNews } from "./interface";
import trending from "./trending.json";

export const fetchTrending = () => {
  return trending;
  const lang = "us";
  return Api.get<RecentNews>(`/v2/top-headlines?country=${lang}`).then(
    (resp) => {
      console.log(resp.data);
      return resp.data;
    }
  );
};
export default function () {}

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
